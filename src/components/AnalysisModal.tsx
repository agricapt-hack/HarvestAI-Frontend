import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, TrendingUp, Users, DollarSign, Calendar, Shield, Heart, Activity, Home, Briefcase } from 'lucide-react';

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

      case 'home-loan':
        return [
          {
            title: "Loan Overview",
            content: [
              "• Interest rates: 8–10.5% p.a.",
              "• Tenure: up to 30 years",
              "• LTV ratio: up to 90%",
              "• EMI options with tax benefits",
              "• Pre-approval in 3–5 days"
            ],
            icon: DollarSign
          },
          {
            title: "Eligibility",
            content: [
              "• Salaried or self-employed individuals",
              "• Age: 21 to 65 years",
              "• Credit score: 750+ preferred",
              "• Income proof & property documents"
            ],
            icon: Users
          }
        ];

      case 'personal-loan':
        return [
          {
            title: "Quick Features",
            content: [
              "• Unsecured loan, no collateral",
              "• Tenure: 1–5 years",
              "• Interest: 10–18% p.a.",
              "• Loan amount: ₹25,000 to ₹25 lakhs",
              "• Disbursal in 1–3 days"
            ],
            icon: DollarSign
          },
          {
            title: "Best For",
            content: [
              "• Medical emergencies",
              "• Travel, wedding expenses",
              "• Debt consolidation",
              "• Home improvement"
            ],
            icon: Users
          }
        ];

      case 'business-loan':
        return [
          {
            title: "Loan Overview",
            content: [
              "• ₹50,000 to ₹50 lakhs",
              "• 8.5–15% interest p.a.",
              "• Tenure: 1–7 years",
              "• Collateral may be required",
              "• Processing time: 7–15 days"
            ],
            icon: DollarSign
          },
          {
            title: "Eligibility",
            content: [
              "• 2+ years of business vintage",
              "• Turnover above ₹1.5 lakhs",
              "• Credit score > 750",
              "• Business registration proof"
            ],
            icon: Users
          }
        ];

      case 'education-loan':
        return [
          {
            title: "Loan Coverage",
            content: [
              "• Tuition + hostel + travel + books",
              "• Up to ₹20 lakhs (India) / ₹50 lakhs (Abroad)",
              "• Interest: 9–13% p.a.",
              "• Moratorium: Course duration + 6 months",
              "• Repayment: up to 15 years"
            ],
            icon: DollarSign
          },
          {
            title: "Eligibility",
            content: [
              "• Admission in recognized institution",
              "• Co-borrower (parent/guardian) required",
              "• Proof of income & collateral (if > ₹7.5L)",
              "• Good academic record"
            ],
            icon: Users
          }
        ];

      case 'gold-loan':
        return [
          {
            title: "Loan Highlights",
            content: [
              "• Secured against gold ornaments",
              "• Loan-to-value ratio up to 75%",
              "• Amount: ₹10,000 to ₹1 crore",
              "• Tenure: 3–36 months",
              "• Interest: 7–14% p.a."
            ],
            icon: DollarSign
          },
          {
            title: "Why Choose",
            content: [
              "• Minimal paperwork",
              "• Instant disbursal within 30 mins",
              "• No income proof required",
              "• Safe locker storage of pledged gold"
            ],
            icon: Users
          }
        ];

      case 'fd-loan':
        return [
          {
            title: "Loan Against FD",
            content: [
              "• Up to 90% of FD value as loan",
              "• Interest = FD rate + 1–2%",
              "• No need to break FD",
              "• Tenure same as FD or lower",
              "• Instant processing"
            ],
            icon: DollarSign
          },
          {
            title: "Advantages",
            content: [
              "• Low interest compared to personal loan",
              "• No credit score check",
              "• Retain interest on FD",
              "• Ideal for urgent cash needs"
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