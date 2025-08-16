import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import { useApp } from "@/store/AppContext";
import { useUser } from "@clerk/clerk-react";
import { useToast } from "@/hooks/use-toast";
import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Building, Save, User } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import axios from "axios";

const Dashboard = () => {
    const BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;
    const { t } = useTranslation();

    const appContext = useApp();
    const BASE_URL_AGRI = import.meta.env.VITE_BACKEND_BASE_URL_AGRI;

    const { user, isLoaded, isSignedIn } = useUser();
    const { toast } = useToast();

    const [formData, setFormData] = useState({
        firstName: user?.unsafeMetadata?.firstName || "",
        lastName: user?.unsafeMetadata?.lastName || "",
        email: user?.primaryEmailAddress?.emailAddress || "",
        phone: (user?.unsafeMetadata?.phoneNumber as string) || "",
        location: {lat: null, lng: null}
    });

    // const [initialData, setInitialData] = useState({
    //     firstName: user?.unsafeMetadata?.firstName || "",
    //     lastName: user?.unsafeMetadata?.lastName || "",
    //     email: user?.primaryEmailAddress?.emailAddress || "",
    //     phone: (user?.unsafeMetadata?.phoneNumber as string) || "",
    //     location: {
    //         lat: null,
    //         lng: null
    //     }
    // });

    useEffect(() => {
        const fetchUserData = async () => {
            if (!user?.primaryEmailAddress?.emailAddress) return;

            try {
                const res = await axios.post(`${BASE_URL_AGRI}/registration/get-user-deatils`, {
                    user_id: user?.primaryEmailAddress?.emailAddress
                });
                const data = res.data.data;
                console.log(data);

                setFormData({
                    firstName: data.name.split(" ")[0] || "",
                    lastName: data.name.split(" ").slice(-1)[0] || "",
                    email: data.email || "",
                    phone: data.whatsapp_number || "",
                    location: {
                        lat: data.location.latitude,
                        lng: data.location.longitude
                    }
                });

                setFormData({
                    firstName: data.name.split(" ")[0] || "",
                    lastName: data.name.split(" ").slice(-1)[0] || "",
                    email: data.email || "",
                    phone: data.whatsapp_number || "",
                    location: {
                        lat: data.location.latitude,
                        lng: data.location.longitude
                    }
                });
            } catch (error) {
                console.error("Failed to fetch user data:", error);
            }
        };

        if (isLoaded && user) {
            // setFormData({
            //     firstName: user?.unsafeMetadata?.firstName,
            //     lastName: user?.unsafeMetadata?.lastName || "",
            //     email: user?.primaryEmailAddress?.emailAddress || "",
            //     phone: user?.unsafeMetadata?.phoneNumber as string || undefined,
            // })
            fetchUserData();
        }
    }, [isLoaded, user]);


    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleSave = async () => {
        if (!user) return;

        setIsLoading(true);

        try {
            const payload = {
                id: user.primaryEmailAddress?.emailAddress,
                first_name: formData.firstName,
                last_name: formData.lastName,
                email_address: formData.email,
                phone: formData.phone,
            };

            await axios.put(`${BASE_URL}/users/${user.username}`, payload);

            toast({
                title: "Profile Updated",
                description: "Your profile has been updated successfully.",
            });
        } catch (error) {
            toast({
                title: "Error",
                description: "Failed to update profile. Please try again.",
                variant: "destructive",
            });
        } finally {
            setIsLoading(false);
        }
    };

    if (!isLoaded) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 flex flex-col items-center justify-center">
                <div className="relative w-20 h-20">
                    <div className="absolute inset-0 rounded-full animate-spin bg-gradient-to-r from-green-400 via-blue-500 to-green-500 p-[3px]">
                        <div className="bg-white rounded-full w-full h-full"></div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-blue-600 text-sm font-medium animate-pulse">Loading...</span>
                    </div>
                </div>
                <p className="mt-4 text-gray-700 text-sm">Please wait while we load your profile</p>
            </div>
        );
    }

    if (!isSignedIn) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 flex flex-col items-center justify-center text-center px-4">
                <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full space-y-4 border border-gray-200">
                    <h2 className="text-2xl font-semibold text-gray-800">You're not signed in</h2>
                    <p className="text-gray-600 text-sm">
                        Please log in to access your dashboard and manage your profile.
                    </p>
                    <Link
                        to="/"
                        className="inline-block mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-semibold shadow-lg transform hover:scale-105 transition-all duration-200"
                    >
                        Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
            <Navbar onLoginClick={appContext.handleLoginClick} />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h3 className="text-3xl font-bold text-center text-gray-900 mb-4">
                    {t('dashboardTitle')}
                </h3>
                <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                    {t('dashboardDescription')}
                </p>

                <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
                    <div className="max-w-4xl mx-auto px-4">

                        <Tabs defaultValue="personal" className="space-y-6">
                            {/* <TabsList className="grid w-full grid-cols-3">
                                <TabsTrigger value="personal" className="flex items-center space-x-2">
                                    <User className="h-4 w-4" />
                                    <span>Personal Details</span>
                                </TabsTrigger>
                                <TabsTrigger value="bank" className="flex items-center space-x-2">
                                    <Building className="h-4 w-4" />
                                    <span>Bank Details</span>
                                </TabsTrigger>
                                <TabsTrigger value="profession" className="flex items-center space-x-2">
                                    <Briefcase className="h-4 w-4" />
                                    <span>Profession Details</span>
                                </TabsTrigger>
                            </TabsList> */}

                            {/* Personal Details Tab */}
                            <TabsContent value="personal">
                                <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                                    <CardHeader className="space-y-1">
                                        <div className="flex items-center space-x-2">
                                            <User className="h-5 w-5 text-primary" />
                                            <CardTitle className="text-xl">Personal Information</CardTitle>
                                        </div>
                                        <CardDescription>
                                            Update your personal details and save changes to your profile
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <Label htmlFor="firstName" className="text-sm font-medium">
                                                    First Name
                                                </Label>
                                                <Input
                                                    id="firstName"
                                                    value={formData.firstName as string}
                                                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                                                    placeholder="Enter your first name"
                                                    className="bg-white/50"
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="lastName" className="text-sm font-medium">
                                                    Last Name
                                                </Label>
                                                <Input
                                                    id="lastName"
                                                    value={formData.lastName as string}
                                                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                                                    placeholder="Enter your last name"
                                                    className="bg-white/50"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="email" className="text-sm font-medium">
                                                Email Address
                                            </Label>
                                            <Input
                                                id="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={(e) => handleInputChange("email", e.target.value)}
                                                className="bg-white/50"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="phone" className="text-sm font-medium">
                                                Mobile Number
                                            </Label>
                                            <Input
                                                id="phone"
                                                type="number"
                                                value={formData.phone}
                                                onChange={(e) => handleInputChange("phone", e.target.value)}
                                                className="bg-white/50"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="phone" className="text-sm font-medium">
                                                Location
                                            </Label>
                                            {formData.location.lat && formData.location.lng && (
                                                <div className="mt-3">
                                                    <iframe
                                                        width="100%"
                                                        height="200"
                                                        className="rounded-lg border"
                                                        loading="lazy"
                                                        allowFullScreen
                                                        src={`https://www.google.com/maps?q=${formData.location.lat},${formData.location.lng}&z=15&output=embed`}
                                                    ></iframe>
                                                </div>
                                            )}
                                        </div>

                                        {/* <div className="space-y-2">
                                            <Label htmlFor="dateOfBirth" className="text-sm font-medium">
                                                Date of Birth
                                            </Label>
                                            <Input
                                                id="dateOfBirth"
                                                type="date"
                                                value={formData.dateOfBirth}
                                                onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                                                className="bg-white/50"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="goals" className="text-sm font-medium">
                                                What is your Goal/ambition?
                                            </Label>
                                            <Textarea
                                                id="goals"
                                                value={formData.goals}
                                                onChange={(e) => handleInputChange("goals", e.target.value)}
                                                placeholder="Share your goals and ambitions..."
                                                className="bg-white/50 min-h-[120px]"
                                                rows={5}
                                            />
                                        </div> */}
                                    </CardContent>
                                </Card>
                            </TabsContent>

                            {/* Bank Details Tab */}
                            {/* <TabsContent value="bank">
                                <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                                    <CardHeader className="space-y-1">
                                        <div className="flex items-center space-x-2">
                                            <Building className="h-5 w-5 text-primary" />
                                            <CardTitle className="text-xl">Bank Information</CardTitle>
                                        </div>
                                        <CardDescription>
                                            Manage your banking details and account information
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <Label htmlFor="customerId" className="text-sm font-medium">
                                                    Customer ID
                                                </Label>
                                                <Input
                                                    id="customerId"
                                                    value={user.username}
                                                    placeholder="Enter your customer ID"
                                                    disabled
                                                    className="bg-muted/50 opacity-60"
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="ifscCode" className="text-sm font-medium">
                                                    IFSC Code
                                                </Label>
                                                <Input
                                                    id="ifscCode"
                                                    value={formData.ifscCode}
                                                    onChange={(e) => handleInputChange("ifscCode", e.target.value)}
                                                    placeholder="Enter IFSC code"
                                                    className="bg-white/50"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <Label htmlFor="branchName" className="text-sm font-medium">
                                                    Branch Name
                                                </Label>
                                                <Input
                                                    id="branchName"
                                                    value={formData.branchName}
                                                    onChange={(e) => handleInputChange("branchName", e.target.value)}
                                                    placeholder="Enter branch name"
                                                    className="bg-white/50"
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="accountType" className="text-sm font-medium">
                                                    Account Type
                                                </Label>
                                                <Input
                                                    id="accountType"
                                                    value={formData.accountType}
                                                    onChange={(e) => handleInputChange("accountType", e.target.value)}
                                                    placeholder="Savings, Current, etc."
                                                    className="bg-white/50"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="accountNumber" className="text-sm font-medium">
                                                Account Number
                                            </Label>
                                            <Input
                                                id="accountNumber"
                                                value={formData.accountNumber}
                                                onChange={(e) => handleInputChange("accountNumber", e.target.value)}
                                                placeholder="Enter account number"
                                                className="bg-white/50"
                                                type="password"
                                            />
                                            <p className="text-xs text-muted-foreground">
                                                Account number is masked for security
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent> */}

                            {/* Profession Details Tab */}
                            {/* <TabsContent value="profession">
                                <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                                    <CardHeader className="space-y-1">
                                        <div className="flex items-center space-x-2">
                                            <Briefcase className="h-5 w-5 text-primary" />
                                            <CardTitle className="text-xl">Professional Information</CardTitle>
                                        </div>
                                        <CardDescription>
                                            Update your business and financial details
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <Label htmlFor="businessType" className="text-sm font-medium">
                                                    Type of Business
                                                </Label>
                                                <Input
                                                    id="businessType"
                                                    value={formData.businessType}
                                                    onChange={(e) => handleInputChange("businessType", e.target.value)}
                                                    placeholder="Agriculture, Retail, etc."
                                                    className="bg-white/50"
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="yearsInBusiness" className="text-sm font-medium">
                                                    Years in Business
                                                </Label>
                                                <Input
                                                    id="yearsInBusiness"
                                                    type="number"
                                                    value={formData.yearsInBusiness}
                                                    onChange={(e) => handleInputChange("yearsInBusiness", e.target.value)}
                                                    placeholder="Enter years of experience"
                                                    className="bg-white/50"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <Label htmlFor="monthlyIncome" className="text-sm font-medium">
                                                    Monthly Income (₹)
                                                </Label>
                                                <Input
                                                    id="monthlyIncome"
                                                    type="number"
                                                    value={formData.monthlyIncome}
                                                    onChange={(e) => handleInputChange("monthlyIncome", e.target.value)}
                                                    placeholder="Enter monthly income"
                                                    className="bg-white/50"
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="monthlyExpenses" className="text-sm font-medium">
                                                    Monthly Expenses (₹)
                                                </Label>
                                                <Input
                                                    id="monthlyExpenses"
                                                    type="number"
                                                    value={formData.monthlyExpenses}
                                                    onChange={(e) => handleInputChange("monthlyExpenses", e.target.value)}
                                                    placeholder="Enter monthly expenses"
                                                    className="bg-white/50"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="averageMonthlySales" className="text-sm font-medium">
                                                Average Monthly Sales (₹)
                                            </Label>
                                            <Input
                                                id="averageMonthlySales"
                                                type="number"
                                                value={formData.averageMonthlySales}
                                                onChange={(e) => handleInputChange("averageMonthlySales", e.target.value)}
                                                placeholder="Enter average monthly sales"
                                                className="bg-white/50"
                                            />
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent> */}

                            <div className="pt-6">
                                <Button
                                    onClick={handleSave}
                                    disabled={isLoading}
                                    className="w-full md:w-auto bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                                >
                                    <Save className="h-4 w-4 mr-2" />
                                    {isLoading ? "Saving..." : "Save Changes"}
                                </Button>
                            </div>
                        </Tabs>
                    </div>
                </div>

            </main>




        </div>
    );
};

export default Dashboard;
