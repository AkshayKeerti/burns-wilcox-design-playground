'use client';

import {
  CheckCircle,
  Star,
  ArrowRight,
  Phone,
  Mail,
  Clock,
  Database,
  Globe,
  FileText,
  Lock,
} from 'lucide-react';
import Link from 'next/link';

export default function ContentVariation3() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-corporate-blue-900 via-corporate-blue-800 to-corporate-blue-700 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-corporate-blue-400 text-white rounded-full text-sm font-light mb-6">
              <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
              Content Design - Cyber Liability Insurance
            </div>
            <h1 className="text-5xl font-light mb-6 tracking-wide">Cyber Liability Insurance</h1>
            <p className="text-xl mb-8 text-white/90 leading-relaxed font-light">
              Protect your business from the growing threat of cyber attacks, data breaches, and
              digital risks. Our comprehensive cyber liability coverage provides financial
              protection and expert guidance in the event of a cyber incident.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-corporate-blue-400 text-white px-8 py-3 rounded-lg font-light hover:bg-corporate-blue-300 transition-colors flex items-center justify-center">
                Get Cyber Protection
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
              <button className="border-2 border-corporate-blue-400 text-corporate-blue-400 px-8 py-3 rounded-lg font-light hover:bg-corporate-blue-400 hover:text-white transition-colors">
                Download Cyber Guide
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="bg-corporate-grey-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-corporate-blue-100 to-corporate-grey-100 rounded-lg h-64 flex items-center justify-center mb-8 border border-corporate-blue-200">
              <div className="text-center">
                <Globe className="w-16 h-16 text-corporate-blue-600 mx-auto mb-4" />
                <p className="text-corporate-blue-800 font-light">Cyber Security Visualization</p>
                <p className="text-corporate-blue-600 text-sm">
                  Image placeholder for cyber security concept
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-light text-corporate-grey-900 mb-6 tracking-wide">
              Understanding Cyber Liability Insurance
            </h2>
            <p className="text-lg text-corporate-grey-700 mb-6 leading-relaxed font-light">
              In today's digital landscape, businesses of all sizes face unprecedented cyber risks.
              From sophisticated ransomware attacks to accidental data breaches, the financial and
              reputational consequences can be devastating. Cyber Liability Insurance is designed to
              protect your business from these modern threats by providing comprehensive coverage
              for both first-party and third-party losses.
            </p>

            <div className="bg-gradient-to-r from-corporate-blue-50 to-corporate-grey-50 p-6 rounded-lg mb-8 border-l-4 border-corporate-blue-400">
              <h3 className="text-xl font-light text-corporate-blue-900 mb-3">
                Why Cyber Insurance is Essential
              </h3>
              <p className="text-corporate-blue-800 font-light">
                According to recent studies, 60% of small businesses close within 6 months of
                experiencing a cyber attack. The average cost of a data breach in 2024 exceeded
                $4.45 million, making cyber insurance not just a recommendation, but a critical
                business necessity.
              </p>
            </div>

            <h3 className="text-2xl font-light text-corporate-grey-900 mb-4 tracking-wide">
              What Cyber Liability Insurance Covers
            </h3>
            <div className="space-y-6 mb-8">
              <div className="bg-white p-6 rounded-lg border border-corporate-blue-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start">
                  <Database className="w-8 h-8 text-corporate-blue-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-light text-corporate-grey-900 text-lg mb-2">
                      Data Breach Response
                    </h4>
                    <p className="text-corporate-grey-700 mb-3 font-light">
                      Covers the costs associated with responding to a data breach, including
                      forensic investigations, legal counsel, notification requirements, and credit
                      monitoring services for affected individuals.
                    </p>
                    <ul className="text-corporate-grey-600 space-y-1 font-light">
                      <li>• Forensic investigation and analysis</li>
                      <li>• Legal and regulatory compliance costs</li>
                      <li>• Customer notification expenses</li>
                      <li>• Credit monitoring and identity theft protection</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-corporate-blue-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start">
                  <Lock className="w-8 h-8 text-corporate-blue-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-light text-corporate-grey-900 text-lg mb-2">
                      Ransomware Protection
                    </h4>
                    <p className="text-corporate-grey-700 mb-3 font-light">
                      Provides coverage for ransomware attacks, including ransom payments, data
                      recovery costs, and business interruption losses resulting from cyber
                      extortion.
                    </p>
                    <ul className="text-corporate-grey-600 space-y-1 font-light">
                      <li>• Ransom payment coverage (where legal)</li>
                      <li>• Data recovery and restoration costs</li>
                      <li>• Business interruption during recovery</li>
                      <li>• Expert negotiation services</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-corporate-blue-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start">
                  <FileText className="w-8 h-8 text-corporate-blue-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-light text-corporate-grey-900 text-lg mb-2">
                      Legal Liability Protection
                    </h4>
                    <p className="text-corporate-grey-700 mb-3 font-light">
                      Covers legal expenses and damages arising from lawsuits filed by customers,
                      clients, or third parties affected by a cyber incident or data breach.
                    </p>
                    <ul className="text-corporate-grey-600 space-y-1 font-light">
                      <li>• Defense costs and legal fees</li>
                      <li>• Settlement and judgment amounts</li>
                      <li>• Regulatory fines and penalties</li>
                      <li>• Privacy violation claims</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-light text-corporate-grey-900 mb-4 tracking-wide">
              Industry-Specific Cyber Risks
            </h3>
            <p className="text-corporate-grey-700 mb-6 leading-relaxed font-light">
              Different industries face unique cyber threats and regulatory requirements. Our cyber
              liability insurance can be tailored to address the specific risks your business faces:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-corporate-blue-50 to-corporate-grey-50 p-6 rounded-lg border border-corporate-blue-300">
                <h4 className="font-light text-corporate-blue-900 mb-3">Healthcare</h4>
                <p className="text-corporate-blue-800 text-sm font-light">
                  HIPAA compliance, patient data protection, medical device security, and regulatory
                  penalties for healthcare data breaches.
                </p>
              </div>
              <div className="bg-gradient-to-br from-corporate-blue-50 to-corporate-grey-50 p-6 rounded-lg border border-corporate-blue-300">
                <h4 className="font-light text-corporate-blue-900 mb-3">Financial Services</h4>
                <p className="text-corporate-blue-800 text-sm font-light">
                  Banking regulations, customer financial data protection, wire transfer fraud, and
                  regulatory compliance requirements.
                </p>
              </div>
              <div className="bg-gradient-to-br from-corporate-blue-50 to-corporate-grey-50 p-6 rounded-lg border border-corporate-blue-300">
                <h4 className="font-light text-corporate-blue-900 mb-3">Retail & E-commerce</h4>
                <p className="text-corporate-blue-800 text-sm font-light">
                  Payment card data protection, online transaction security, customer personal
                  information, and PCI DSS compliance.
                </p>
              </div>
              <div className="bg-gradient-to-br from-corporate-blue-50 to-corporate-grey-50 p-6 rounded-lg border border-corporate-blue-300">
                <h4 className="font-light text-corporate-blue-900 mb-3">Manufacturing</h4>
                <p className="text-corporate-blue-800 text-sm font-light">
                  Industrial control systems, intellectual property protection, supply chain
                  security, and operational technology risks.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-light text-corporate-grey-900 mb-4 tracking-wide">
              Cyber Risk Assessment & Prevention
            </h3>
            <p className="text-corporate-grey-700 mb-6 leading-relaxed font-light">
              Beyond insurance coverage, we provide comprehensive cyber risk assessment services to
              help identify vulnerabilities and implement preventive measures. Our cybersecurity
              experts work with your team to develop robust security protocols and incident response
              plans.
            </p>

            <div className="bg-gradient-to-r from-corporate-blue-50 to-corporate-grey-50 p-6 rounded-lg mb-8">
              <h4 className="font-light text-corporate-grey-900 mb-4">
                Prevention Strategies Include:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-corporate-blue-600 mr-3" />
                  <span className="text-corporate-grey-700 font-light">
                    Employee cybersecurity training
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-corporate-blue-600 mr-3" />
                  <span className="text-corporate-grey-700 font-light">
                    Multi-factor authentication
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-corporate-blue-600 mr-3" />
                  <span className="text-corporate-grey-700 font-light">
                    Regular security audits
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-corporate-blue-600 mr-3" />
                  <span className="text-corporate-grey-700 font-light">
                    Data encryption protocols
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-corporate-blue-600 mr-3" />
                  <span className="text-corporate-grey-700 font-light">
                    Backup and recovery systems
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-corporate-blue-600 mr-3" />
                  <span className="text-corporate-grey-700 font-light">
                    Incident response planning
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Contact Card */}
            <div className="bg-gradient-to-br from-corporate-blue-900 to-corporate-blue-800 text-white p-6 rounded-lg mb-8">
              <h3 className="text-xl font-light mb-4">Get Cyber Protection</h3>
              <p className="mb-4 text-white/90 font-light">
                Don't wait until it's too late. Get comprehensive cyber liability coverage today.
              </p>
              <button className="w-full bg-corporate-blue-400 text-white py-3 px-4 rounded-lg font-light hover:bg-corporate-blue-300 transition-colors mb-4">
                Request Cyber Quote
              </button>
              <div className="space-y-3 text-white/90">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <span className="font-light">1-800-CYBER-INS</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <span className="font-light">cyber@burnsandwilcox.com</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  <span className="font-light">24/7 Cyber Support</span>
                </div>
              </div>
            </div>

            {/* Statistics */}
            <div className="bg-white border border-corporate-blue-200 p-6 rounded-lg mb-8 shadow-sm">
              <h3 className="text-xl font-light text-corporate-grey-900 mb-4">
                Cyber Attack Statistics
              </h3>
              <div className="space-y-4">
                <div className="text-center p-4 bg-gradient-to-r from-corporate-blue-50 to-corporate-grey-50 rounded-lg border border-corporate-blue-300">
                  <div className="text-2xl font-light text-corporate-blue-600">43%</div>
                  <div className="text-corporate-blue-800 text-sm font-light">
                    of cyber attacks target small businesses
                  </div>
                </div>
                <div className="text-center p-4 bg-gradient-to-r from-corporate-blue-50 to-corporate-grey-50 rounded-lg border border-corporate-blue-300">
                  <div className="text-2xl font-light text-corporate-blue-600">$4.45M</div>
                  <div className="text-corporate-blue-800 text-sm font-light">
                    average cost of a data breach
                  </div>
                </div>
                <div className="text-center p-4 bg-gradient-to-r from-corporate-blue-50 to-corporate-grey-50 rounded-lg border border-corporate-blue-300">
                  <div className="text-2xl font-light text-corporate-blue-600">287 days</div>
                  <div className="text-corporate-blue-800 text-sm font-light">
                    average time to identify a breach
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-gradient-to-br from-corporate-blue-600 to-corporate-blue-500 text-white p-6 rounded-lg mb-8">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-corporate-blue-200" />
                ))}
              </div>
              <p className="text-white/90 mb-4 italic font-light">
                "When our company experienced a ransomware attack, Burns & Wilcox cyber insurance
                coverage was invaluable. Their expert team guided us through the entire recovery
                process."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3">
                  <span className="font-light text-corporate-blue-600">MS</span>
                </div>
                <div>
                  <div className="font-light">Maria Santos</div>
                  <div className="text-white/70 text-sm font-light">CTO, TechCorp Solutions</div>
                </div>
              </div>
            </div>

            {/* Resources */}
            <div className="bg-white border border-corporate-blue-200 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-light text-corporate-grey-900 mb-4">
                Cyber Security Resources
              </h3>
              <div className="space-y-3">
                <Link
                  href="#"
                  className="flex items-center text-corporate-blue-600 hover:text-corporate-blue-700 font-light"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  <span>Cyber Risk Assessment Guide</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center text-corporate-blue-600 hover:text-corporate-blue-700 font-light"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  <span>Incident Response Checklist</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center text-corporate-blue-600 hover:text-corporate-blue-700 font-light"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  <span>Employee Training Materials</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center text-corporate-blue-600 hover:text-corporate-blue-700 font-light"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  <span>Regulatory Compliance Guide</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-corporate-blue-900 via-corporate-blue-800 to-corporate-blue-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-light mb-4 tracking-wide">
            Protect Your Digital Assets Today
          </h2>
          <p className="text-xl mb-8 text-white/90 font-light">
            Don't become another cyber attack statistic. Get comprehensive cyber liability
            protection from Burns & Wilcox.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-corporate-blue-400 text-white px-8 py-3 rounded-lg font-light hover:bg-corporate-blue-300 transition-colors">
              Get Cyber Protection
            </button>
            <Link
              href="/solutions"
              className="border-2 border-corporate-blue-400 text-corporate-blue-400 px-8 py-3 rounded-lg font-light hover:bg-corporate-blue-400 hover:text-white transition-colors"
            >
              View All Solutions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
