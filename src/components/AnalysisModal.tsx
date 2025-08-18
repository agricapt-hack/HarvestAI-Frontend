import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, TrendingUp, Users, DollarSign, Calendar, Shield, Heart, Activity, Home, Briefcase, Coins, Trees, Milk, Sprout, Tractor } from 'lucide-react';

interface AnalysisModalProps {
  product: {
    title: string;
    id: string;
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

const AnalysisModal: React.FC<AnalysisModalProps> = ({ product, isOpen, onClose }) => {
  const [currentPage, setCurrentPage] = useState(0);

  if (!product) return null;

  const getAnalysisData = (productId: string) => {
    switch (productId) {
      case 'savings-account':
        return [
          {
            title: "Savings Account Features",
            content: [
              "• Interest rate: 2.7–4% per annum",
              "• Minimum balance: ₹500–₹10,000",
              "• Free ATM transactions: 5–8 per month",
              "• Mobile banking & UPI enabled",
              "• Overdraft facility available"
            ],
            icon: DollarSign
          },
          {
            title: "Digital Benefits",
            content: [
              "• 24/7 online banking access",
              "• Instant UPI transfers",
              "• Bill payment & recharge facility",
              "• Auto-debit for SIPs and EMIs",
              "• Transaction alerts via SMS/email"
            ],
            icon: TrendingUp
          },
          {
            title: "Growth Potential",
            content: [
              "• Encourages regular saving habit",
              "• Acts as a financial safety net",
              "• Gateway to other banking services",
              "• Helps in building credit history",
              "• Financial discipline development"
            ],
            icon: Users
          }
        ];

      case 'salary-account':
        return [
          {
            title: "Key Benefits",
            content: [
              "• Zero minimum balance",
              "• Direct salary credit with timely alerts",
              "• Higher ATM withdrawal limit",
              "• Preferential loan processing",
              "• Free debit card and cheque book"
            ],
            icon: DollarSign
          },
          {
            title: "Additional Features",
            content: [
              "• Free accident insurance cover",
              "• Easy conversion to savings account after job change",
              "• Auto sweep facility for higher interest",
              "• Quick overdraft up to 3x salary",
              "• Cashback offers on select transactions"
            ],
            icon: TrendingUp
          }
        ];

      case 'current-account':
        return [
          {
            title: "Business Essentials",
            content: [
              "• Unlimited transactions allowed",
              "• No interest paid on balance",
              "• Overdraft facility for working capital",
              "• Higher transaction limits than savings accounts",
              "• Cheque, RTGS/NEFT enabled"
            ],
            icon: DollarSign
          },
          {
            title: "Who Should Use",
            content: [
              "• Ideal for traders, business owners",
              "• Suitable for high cash flow handling",
              "• Multiple authorized signatories allowed",
              "• Dedicated relationship manager support",
              "• Tax audit compliant transaction history"
            ],
            icon: Users
          }
        ];

      case 'safe-deposit-locker':
        return [
          {
            title: "Locker Features",
            content: [
              "• Secure storage for valuables & documents",
              "• Available in various sizes (S/M/L)",
              "• Rent starts from ₹500/year",
              "• Dual key access for maximum safety",
              "• Access during banking hours"
            ],
            icon: DollarSign
          },
          {
            title: "Safety Assurance",
            content: [
              "• Fire & theft-resistant vaults",
              "• CCTV & biometric secured area",
              "• Annual agreement with nominee facility",
              "• PAN & ID proof required for issuance",
              "• Joint locker access supported"
            ],
            icon: Users
          }
        ];

      case 'safe-custody':
        return [
          {
            title: "Custody Services",
            content: [
              "• Secure storage of documents & valuables",
              "• Ideal for share certificates, wills, property papers",
              "• Rent-based service",
              "• Access only upon verification",
              "• Peace of mind with tamper-proof envelopes"
            ],
            icon: DollarSign
          }
        ];

      case 'sukanya-samriddhi':
        return [
          {
            title: "Scheme Highlights",
            content: [
              "• For girl child below 10 years",
              "• Tax-free interest (~8% p.a.)",
              "• Deposits: ₹250 to ₹1.5 lakh/year",
              "• Maturity after 21 years or marriage",
              "• Partial withdrawal after 18 years"
            ],
            icon: DollarSign
          },
          {
            title: "Parental Benefits",
            content: [
              "• Tax deduction under 80C",
              "• High returns & secure investment",
              "• Government-backed scheme",
              "• Encourages education & marriage planning"
            ],
            icon: TrendingUp
          }
        ];

      // For 'loans'
      case 'kisan-credit-card':
        return [
          {
            title: "Credit Facility",
            content: [
              "• Revolving credit up to ₹3 lakhs",
              "• Interest: 4–7% p.a. (with subsidy)",
              "• Flexible repayment linked to harvest",
              "• ATM-cum-debit card facility",
              "• Crop insurance cover included"
            ],
            icon: DollarSign
          },
          {
            title: "Eligibility",
            content: [
              "• Farmers owning/renting cultivable land",
              "• Tenant farmers, sharecroppers eligible",
              "• Age: 18–75 years",
              "• KYC & land ownership proof required"
            ],
            icon: Users
          }
        ];

      case 'tractor-machinery-loan':
        return [
          {
            title: "Loan Features",
            content: [
              "• Loan up to ₹25 lakhs (depends on machine cost)",
              "• Repayment tenure: 3–7 years",
              "• Margin money: 10–25%",
              "• Interest rate: 8–12% p.a.",
              "• Covers tractors, harvesters, irrigation pumps, etc."
            ],
            icon: Tractor
          },
          {
            title: "Eligibility",
            content: [
              "• Individual farmers, groups, or cooperatives",
              "• Should own/rent agricultural land",
              "• Minimum 2 acres of cultivable land preferred",
              "• KYC documents & land proof required"
            ],
            icon: Users
          }
        ];

      case 'crop-loan':
        return [
          {
            title: "Loan Features",
            content: [
              "• Short-term loan up to ₹3 lakhs",
              "• Repayment after harvest (6–18 months)",
              "• Interest: 7% p.a. (subsidy up to 3% for timely repayment)",
              "• Covers seeds, fertilizers, pesticides, labor",
              "• Simple processing and quick disbursal"
            ],
            icon: Sprout
          },
          {
            title: "Eligibility",
            content: [
              "• Farmers engaged in seasonal crop cultivation",
              "• Tenant farmers and sharecroppers eligible",
              "• Age: 18–70 years",
              "• Land records or lease agreement required"
            ],
            icon: Users
          }
        ];

      case 'dairy-livestock-loan':
        return [
          {
            title: "Loan Features",
            content: [
              "• Loan up to ₹10 lakhs (depending on activity)",
              "• Repayment period: 3–5 years",
              "• Covers purchase of cows, buffaloes, goats, poultry, fisheries",
              "• Includes shed construction, feed, and maintenance",
              "• Interest subsidy available under govt. schemes"
            ],
            icon: Milk
          },
          {
            title: "Eligibility",
            content: [
              "• Farmers, women entrepreneurs, SHGs, cooperatives",
              "• Age: 18–70 years",
              "• Basic training/experience in dairy/livestock preferred",
              "• KYC & income proof required"
            ],
            icon: Users
          }
        ];

      case 'farm-development-loan':
        return [
          {
            title: "Loan Features",
            content: [
              "• Loan amount: ₹50,000 to ₹20 lakhs",
              "• Repayment period: 5–15 years",
              "• Interest: 8–11% p.a.",
              "• Funds for irrigation, fencing, land leveling, greenhouses, orchards",
              "• Long-term development support for sustainable farming"
            ],
            icon: Trees
          },
          {
            title: "Eligibility",
            content: [
              "• Farmers with cultivable land ownership",
              "• Age: 18–70 years",
              "• Detailed project plan may be required",
              "• KYC, land documents mandatory"
            ],
            icon: Users
          }
        ];

      case 'agri-gold-loan':
        return [
          {
            title: "Loan Features",
            content: [
              "• Loan amount: ₹10,000 to ₹25 lakhs (based on gold value)",
              "• Tenure: 6 months to 3 years",
              "• Interest rate: 7–12% p.a.",
              "• Quick disbursal with minimal paperwork",
              "• Secure storage of pledged gold"
            ],
            icon: Coins
          },
          {
            title: "Eligibility",
            content: [
              "• Farmers owning gold ornaments",
              "• Age: 18–70 years",
              "• No income proof required",
              "• KYC & gold purity verification mandatory"
            ],
            icon: Users
          }
        ];


      // For 'life-insurance'
      case 'life-insurance':
        return [
          {
            title: "Coverage",
            content: [
              "• ₹2 lakhs to ₹1 crore+ sum assured",
              "• Term, whole life, and endowment plans",
              "• Flexible policy terms (5–40 years)",
              "• Tax benefits under 80C & 10(10D)",
              "• Optional riders: accident, critical illness"
            ],
            icon: Shield
          },
          {
            title: "Eligibility",
            content: [
              "• Age: 18–65 years",
              "• Basic health checkup (for high cover)",
              "• Income proof required",
              "• Indian resident or NRI"
            ],
            icon: Users
          }
        ];

      // For 'pmjjby'
      case 'pmjjby':
        return [
          {
            title: "Scheme Details",
            content: [
              "• ₹2 lakh life cover",
              "• Premium: ₹330/year",
              "• Renewable every year",
              "• Covers death (any cause)",
              "• No medical required"
            ],
            icon: Heart
          },
          {
            title: "Eligibility",
            content: [
              "• Age: 18–50 years",
              "• Savings account required",
              "• Consent for auto-debit",
              "• Indian resident"
            ],
            icon: Users
          }
        ];

      // For 'pmsby'
      case 'pmsby':
        return [
          {
            title: "Scheme Details",
            content: [
              "• ₹2 lakh accident cover",
              "• Premium: ₹12/year",
              "• Covers accidental death/disability",
              "• Renewable every year",
              "• 24x7 worldwide coverage"
            ],
            icon: Activity
          },
          {
            title: "Eligibility",
            content: [
              "• Age: 18–70 years",
              "• Savings account required",
              "• Consent for auto-debit",
              "• Indian resident"
            ],
            icon: Users
          }
        ];

      // For 'health-insurance'
      case 'health-insurance':
        return [
          {
            title: "Coverage",
            content: [
              "• ₹1 lakh to ₹25 lakhs+ sum insured",
              "• Covers hospitalization, surgery, daycare",
              "• Cashless treatment at network hospitals",
              "• Pre & post-hospitalization expenses",
              "• Family floater & individual plans"
            ],
            icon: Heart
          },
          {
            title: "Eligibility",
            content: [
              "• Age: 18-65 years (adults)",
              "• Children: 91 days+",
              "• No medical for young/proposal-based",
              "• Indian resident"
            ],
            icon: Users
          }
        ];

      // For 'general-insurance'
      case 'general-insurance':
        return [
          {
            title: "Coverage",
            content: [
              "• Motor, home, travel, and shop insurance",
              "• Covers damage, theft, fire, natural calamity",
              "• Third-party & comprehensive options",
              "• Quick claim settlement",
              "• Add-ons: zero depreciation, roadside assist"
            ],
            icon: Home
          },
          {
            title: "Eligibility",
            content: [
              "• Asset ownership (vehicle, property, etc.)",
              "• Valid documents (RC, address proof, etc.)",
              "• Indian resident"
            ],
            icon: Users
          }
        ];

      // For 'msme-insurance'
      case 'msme-insurance':
        return [
          {
            title: "Coverage",
            content: [
              "• Fire, burglary, natural calamities",
              "• Covers stock, plant, machinery, premises",
              "• Business interruption cover",
              "• Customizable as per business needs",
              "• Quick claim process"
            ],
            icon: Briefcase
          },
          {
            title: "Eligibility",
            content: [
              "• Registered MSME (micro, small, medium)",
              "• Business proof required",
              "• Asset details for coverage",
              "• Indian business entity"
            ],
            icon: Users
          }
        ];

      default:
        return [];
    }
  };


  const analysisData = getAnalysisData(product.id);
  const totalPages = analysisData.length;

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentData = analysisData[currentPage];
  const Icon = currentData?.icon || Calendar;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-center mb-4">
            {product.title} - Analysis
          </DialogTitle>
        </DialogHeader>

        {currentData && (
          <div className="space-y-6">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-full p-4">
                <Icon className="h-8 w-8 text-purple-600" />
              </div>
            </div>

            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{currentData.title}</h3>
              <div className="bg-gray-50 rounded-lg p-6 text-left">
                {currentData.content.map((item, index) => (
                  <div key={index} className="mb-2 text-gray-700">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-6">
              <Button
                onClick={prevPage}
                variant="outline"
                disabled={totalPages <= 1}
                className="flex items-center"
              >
                <ChevronLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>

              <div className="flex space-x-2">
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${i === currentPage
                      ? 'bg-purple-600'
                      : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                  />
                ))}
              </div>

              <Button
                onClick={nextPage}
                variant="outline"
                disabled={totalPages <= 1}
                className="flex items-center"
              >
                Next
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default AnalysisModal;