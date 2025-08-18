import { Box, CircleDollarSign, Coins, CreditCard, HandCoins, HandHeart, Handshake, House, IndianRupee, LucideSwatchBook, School, Shield, Sprout, Tractor, Trees, User } from "lucide-react";
import { useTranslation } from "react-i18next";

export const useFinancialProducts = (type = "all") => {
  const { t } = useTranslation();

  const allProducts = [
    {
      id: "kisan-credit-card",
      type: "loan",
      title: t('kisanCreditCardLoan'),
      description: t('kisanCreditCardLoanDesc'),
      icon: CreditCard,
      color: "bg-green-100 text-green-700",
    },
    {
      id: "tractor-machinery-loan",
      type: "loan",
      title: t('tractorMachineryLoan'),
      description: t('tractorMachineryLoanDesc'),
      icon: Tractor,
      color: "bg-blue-100 text-blue-700",
    },
    {
      id: "crop-loan",
      type: "loan",
      title: t('cropLoan'),
      description: t('cropLoanDesc'),
      icon: Sprout,
      color: "bg-green-100 text-green-700",
    },
    {
      id: "dairy-livestock-loan",
      type: "loan",
      title: t('dairyLivestockLoan'),
      description: t('dairyLivestockLoanDesc'),
      icon: LucideSwatchBook,
      color: "bg-yellow-100 text-yellow-700",
    },
    {
      id: "farm-development-loan",
      type: "loan",
      title: t('farmDevelopmentLoan'),
      description: t('farmDevelopmentLoanDesc'),
      icon: Trees,
      color: "bg-blue-100 text-blue-700",
    },
    {
      id: "agri-gold-loan",
      type: "loan",
      title: t('agriGoldLoan'),
      description: t('agriGoldLoanDesc'),
      icon: Coins,
      color: "bg-yellow-100 text-yellow-700",
    },

    {
      id: "savings-account",
      type: "account",
      title: t('savingsAccount'),
      description: t('savingsAccountDesc'),
      icon: HandCoins,
      color: "bg-green-100 text-green-700",
    },
    {
      id: "salary-account",
      type: "account",
      title: t('salaryAccount'),
      description: t('salaryAccountDesc'),
      icon: CircleDollarSign,
      color: "bg-blue-100 text-blue-700",
    },
    {
      id: "current-account",
      type: "account",
      title: t('currentAccount'),
      description: t('currentAccountDesc'),
      icon: IndianRupee,
      color: "bg-purple-100 text-purple-700",
    },
    {
      id: "safe-deposit-locker",
      type: "account",
      title: t('safeDepositLocker'),
      description: t('safeDepositLockerDesc'),
      icon: Box,
      color: "bg-green-100 text-green-700",
    },
    {
      id: "safe-custody",
      type: "account",
      title: t('safeCustody'),
      description: t('safeCustodyDesc'),
      icon: Shield,
      color: "bg-blue-100 text-blue-700",
    },
    {
      id: "sukanya-samriddhi",
      type: "account",
      title: t('sukanyaSamriddhi'),
      description: t('sukanyaSamriddhiDesc'),
      icon: HandHeart,
      color: "bg-purple-100 text-purple-700",
    },
    {
      id: "life-insurance",
      type: "insurance",
      title: t('lifeInsurance'),
      description: t('lifeInsuranceDesc'),
      icon: HandCoins,
      color: "bg-green-100 text-green-700",
    },
    {
      id: "pmjjby",
      type: "insurance",
      title: t('pmjjby'),
      description: t('pmjjbyDesc'),
      icon: CircleDollarSign,
      color: "bg-blue-100 text-blue-700",
    },
    {
      id: "general-insurance",
      type: "insurance",
      title: t('generalInsurance'),
      description: t('generalInsuranceDesc'),
      icon: IndianRupee,
      color: "bg-purple-100 text-purple-700",
    },
    {
      id: "healh-insurance",
      type: "insurance",
      title: t('healthInsurance'),
      description: t('healthInsuranceDesc'),
      icon: Box,
      color: "bg-green-100 text-green-700",
    },
    {
      id: "pmsby",
      type: "insurance",
      title: t('pmsby'),
      description: t('pmsbyDesc'),
      icon: Shield,
      color: "bg-blue-100 text-blue-700",
    },
    {
      id: "msme-insurance",
      type: "insurance",
      title: t('msmeInsurance'),
      description: t('msmeInsuranceDesc'),
      icon: HandHeart,
      color: "bg-purple-100 text-purple-700",
    },
  ];

  if (type === "all") return allProducts;
  else return allProducts.filter((product) => product.type === type);
};
