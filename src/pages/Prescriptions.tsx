import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { 
  ArrowLeft, 
  Calendar, 
  Search, 
  Eye, 
  FileText, 
  Clock, 
  TrendingUp, 
  Download, 
  AlertCircle,
  CheckCircle,
  MapPin,
  Phone
} from 'lucide-react';
import { Link } from 'react-router-dom';

const fakePrescriptions = [
  {
    id: 1,
    date: '2024-01-15',
    rightEye: { 
      sph: -2.25, 
      cyl: -0.75, 
      axis: 180,
      va: '20/20',
      add: 0
    },
    leftEye: { 
      sph: -2.00, 
      cyl: -0.50, 
      axis: 175,
      va: '20/20',
      add: 0
    },
    doctor: 'Dr. Sarah Johnson, OD',
    clinic: 'Vision Care Center',
    clinicAddress: '123 Main Street, Downtown, CA 90210',
    clinicPhone: '(555) 123-4567',
    status: 'active',
    prescriptionType: 'Distance & Near Vision',
    notes: 'Mild astigmatism progression noted. Continue with current eyewear. Schedule follow-up in 6 months.',
    nextCheckup: '2024-07-15',
    tests: ['Visual Acuity', 'Refraction', 'Ophthalmoscopy', 'Tonometry'],
    recommendations: [
      'Reduce screen time when possible',
      'Take regular breaks during computer work',
      'Ensure adequate lighting while reading'
    ]
  },
  {
    id: 2,
    date: '2023-07-10',
    rightEye: { 
      sph: -2.00, 
      cyl: -0.50, 
      axis: 178,
      va: '20/25',
      add: 0
    },
    leftEye: { 
      sph: -1.75, 
      cyl: -0.25, 
      axis: 172,
      va: '20/20',
      add: 0
    },
    doctor: 'Dr. Michael Chen, MD',
    clinic: 'EyeCare Plus Medical Center',
    clinicAddress: '456 Oak Avenue, Midtown, CA 90211',
    clinicPhone: '(555) 987-6543',
    status: 'expired',
    prescriptionType: 'Distance Vision',
    notes: 'Stable vision with slight progression. Patient adapting well to current prescription. No complications observed.',
    nextCheckup: '2024-01-10',
    tests: ['Visual Acuity', 'Refraction', 'Slit Lamp Examination'],
    recommendations: [
      'Continue current eyewear',
      'Annual eye exams recommended',
      'Protect eyes from UV exposure'
    ]
  },
  {
    id: 3,
    date: '2023-01-20',
    rightEye: { 
      sph: -1.75, 
      cyl: -0.25, 
      axis: 175,
      va: '20/25',
      add: 0
    },
    leftEye: { 
      sph: -1.50, 
      cyl: -0.25, 
      axis: 170,
      va: '20/20',
      add: 0
    },
    doctor: 'Dr. Emily Roberts, OD',
    clinic: 'Clear Vision Institute',
    clinicAddress: '789 Pine Road, Uptown, CA 90212',
    clinicPhone: '(555) 456-7890',
    status: 'expired',
    prescriptionType: 'Distance Vision',
    notes: 'Second prescription adjustment. Patient reports improved clarity and comfort. No adverse effects noted.',
    nextCheckup: '2023-07-20',
    tests: ['Visual Acuity', 'Refraction', 'Color Vision Test'],
    recommendations: [
      'Wear glasses consistently',
      'Avoid eye strain during prolonged reading',
      'Follow up in 6 months'
    ]
  },
  {
    id: 4,
    date: '2022-08-15',
    rightEye: { 
      sph: -1.50, 
      cyl: -0.25, 
      axis: 172,
      va: '20/30',
      add: 0
    },
    leftEye: { 
      sph: -1.25, 
      cyl: 0, 
      axis: 0,
      va: '20/25',
      add: 0
    },
    doctor: 'Dr. James Wilson, MD',
    clinic: 'Metropolitan Eye Hospital',
    clinicAddress: '321 Elm Street, Central City, CA 90213',
    clinicPhone: '(555) 234-5678',
    status: 'expired',
    prescriptionType: 'Distance Vision',
    notes: 'First prescription for corrective lenses. Patient experiencing mild myopia. Adjustment period expected.',
    nextCheckup: '2023-02-15',
    tests: ['Comprehensive Eye Exam', 'Visual Acuity', 'Refraction'],
    recommendations: [
      'Gradual adaptation to new glasses',
      'Regular eye exercises',
      'Maintain good lighting while reading'
    ]
  },
  {
    id: 5,
    date: '2022-02-28',
    rightEye: { 
      sph: -1.25, 
      cyl: 0, 
      axis: 0,
      va: '20/30',
      add: 0
    },
    leftEye: { 
      sph: -1.00, 
      cyl: 0, 
      axis: 0,
      va: '20/25',
      add: 0
    },
    doctor: 'Dr. Lisa Martinez, OD',
    clinic: 'Family Vision Center',
    clinicAddress: '654 Maple Drive, Westside, CA 90214',
    clinicPhone: '(555) 345-6789',
    status: 'expired',
    prescriptionType: 'Distance Vision',
    notes: 'Initial vision screening. Mild myopia detected. Recommended corrective lenses for improved distance vision.',
    nextCheckup: '2022-08-28',
    tests: ['Visual Acuity', 'Refraction', 'Eye Health Assessment'],
    recommendations: [
      'Consider corrective lenses',
      'Limit screen time',
      'Regular outdoor activities'
    ]
  },
  {
    id: 6,
    date: '2021-09-10',
    rightEye: { 
      sph: -0.75, 
      cyl: 0, 
      axis: 0,
      va: '20/40',
      add: 0
    },
    leftEye: { 
      sph: -0.50, 
      cyl: 0, 
      axis: 0,
      va: '20/30',
      add: 0
    },
    doctor: 'Dr. Robert Kim, MD',
    clinic: 'Advanced Eye Care Clinic',
    clinicAddress: '987 Cedar Lane, Eastside, CA 90215',
    clinicPhone: '(555) 567-8901',
    status: 'expired',
    prescriptionType: 'Monitoring',
    notes: 'Routine eye examination. Minor refractive error detected. Monitoring recommended for potential progression.',
    nextCheckup: '2022-03-10',
    tests: ['Visual Acuity', 'Basic Refraction', 'Fundus Examination'],
    recommendations: [
      'Continue monitoring',
      'Annual eye exams',
      'Healthy lifestyle maintenance'
    ]
  }
];

const visionTrends = [
  { period: 'Jan 2024', rightSph: -2.25, leftSph: -2.00, status: 'stable' },
  { period: 'Jul 2023', rightSph: -2.00, leftSph: -1.75, status: 'slight-progression' },
  { period: 'Jan 2023', rightSph: -1.75, leftSph: -1.50, status: 'progression' },
  { period: 'Aug 2022', rightSph: -1.50, leftSph: -1.25, status: 'progression' },
  { period: 'Feb 2022', rightSph: -1.25, leftSph: -1.00, status: 'initial' },
  { period: 'Sep 2021', rightSph: -0.75, leftSph: -0.50, status: 'baseline' }
];

export default function Prescriptions() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPrescriptions = fakePrescriptions.filter(
    prescription => 
      prescription.doctor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      prescription.clinic.toLowerCase().includes(searchTerm.toLowerCase()) ||
      prescription.notes.toLowerCase().includes(searchTerm.toLowerCase()) ||
      prescription.prescriptionType.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'expired':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getTrendColor = (status) => {
    switch (status) {
      case 'stable':
        return 'border-green-500';
      case 'slight-progression':
        return 'border-yellow-500';
      case 'progression':
        return 'border-orange-500';
      case 'initial':
        return 'border-blue-500';
      case 'baseline':
        return 'border-gray-500';
      default:
        return 'border-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-sky-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/">
                <Button variant="ghost" className="mr-4">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <img 
                src="/quicksight_logo.png" 
                alt="QuickSight Logo" 
                className="h-12 w-auto mr-2"
              />
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" className="border-blue-200 text-blue-800 hover:bg-blue-50">
                <Download className="h-4 w-4 mr-2" />
                Export Records
              </Button>
              <Button className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-2 rounded-full">
                <Eye className="h-4 w-4 mr-2" />
                New Test
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Prescription History</h1>
          <p className="text-gray-600">Complete record of your eye health and prescription evolution</p>
        </div>

        <Tabs defaultValue="history" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="history">Prescription History</TabsTrigger>
            <TabsTrigger value="trends">Vision Trends</TabsTrigger>
            <TabsTrigger value="current">Current Prescription</TabsTrigger>
          </TabsList>

          <TabsContent value="history" className="space-y-6">
            {/* Search and Filter */}
            <Card className="border-0 shadow-sm">
              <CardContent className="p-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search by doctor, clinic, notes, or prescription type..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <FileText className="h-4 w-4 mr-2" />
                      Filter
                    </Button>
                    <Button variant="outline" size="sm">
                      <Calendar className="h-4 w-4 mr-2" />
                      Date Range
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Prescription History */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-gray-900">
                  {filteredPrescriptions.length} Prescription{filteredPrescriptions.length !== 1 ? 's' : ''} Found
                </h2>
                <Badge variant="outline" className="text-sm">
                  Showing last 3 years
                </Badge>
              </div>

              {filteredPrescriptions.map((prescription) => (
                <Card key={prescription.id} className="border-0 shadow-sm hover:shadow-md transition-all duration-200">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Calendar className="h-4 w-4 text-gray-500" />
                          <span className="font-semibold text-gray-900 text-lg">
                            {new Date(prescription.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </span>
                          <Badge className={`${getStatusColor(prescription.status)} border`}>
                            {prescription.status}
                          </Badge>
                        </div>
                        <p className="text-gray-600 mb-1">{prescription.doctor}</p>
                        <p className="text-sm text-gray-500 mb-2">{prescription.clinic}</p>
                        <Badge variant="outline" className="text-xs">
                          {prescription.prescriptionType}
                        </Badge>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <FileText className="h-4 w-4 mr-2" />
                          View Details
                        </Button>
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
                          <Eye className="h-4 w-4 text-blue-600" />
                          Right Eye (OD)
                        </h4>
                        <div className="bg-gradient-to-r from-blue-50 to-sky-50 p-4 rounded-lg border border-blue-100">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="text-center">
                              <div className="text-xs text-gray-500 mb-1">SPH</div>
                              <div className="text-lg font-bold text-blue-900">{prescription.rightEye.sph}</div>
                            </div>
                            <div className="text-center">
                              <div className="text-xs text-gray-500 mb-1">CYL</div>
                              <div className="text-lg font-bold text-blue-900">{prescription.rightEye.cyl}</div>
                            </div>
                            <div className="text-center">
                              <div className="text-xs text-gray-500 mb-1">AXIS</div>
                              <div className="text-lg font-bold text-blue-900">{prescription.rightEye.axis}°</div>
                            </div>
                            <div className="text-center">
                              <div className="text-xs text-gray-500 mb-1">VA</div>
                              <div className="text-lg font-bold text-blue-900">{prescription.rightEye.va}</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
                          <Eye className="h-4 w-4 text-sky-600" />
                          Left Eye (OS)
                        </h4>
                        <div className="bg-gradient-to-r from-sky-50 to-blue-50 p-4 rounded-lg border border-sky-100">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="text-center">
                              <div className="text-xs text-gray-500 mb-1">SPH</div>
                              <div className="text-lg font-bold text-sky-900">{prescription.leftEye.sph}</div>
                            </div>
                            <div className="text-center">
                              <div className="text-xs text-gray-500 mb-1">CYL</div>
                              <div className="text-lg font-bold text-sky-900">{prescription.leftEye.cyl}</div>
                            </div>
                            <div className="text-center">
                              <div className="text-xs text-gray-500 mb-1">AXIS</div>
                              <div className="text-lg font-bold text-sky-900">{prescription.leftEye.axis}°</div>
                            </div>
                            <div className="text-center">
                              <div className="text-xs text-gray-500 mb-1">VA</div>
                              <div className="text-lg font-bold text-sky-900">{prescription.leftEye.va}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Clinical Notes */}
                    <div className="bg-gray-50 p-4 rounded-lg mb-4">
                      <h5 className="font-medium text-gray-900 mb-2">Clinical Notes</h5>
                      <p className="text-sm text-gray-700">{prescription.notes}</p>
                    </div>

                    {/* Tests Performed */}
                    <div className="mb-4">
                      <h5 className="font-medium text-gray-900 mb-2">Tests Performed</h5>
                      <div className="flex flex-wrap gap-2">
                        {prescription.tests.map((test, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {test}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Recommendations */}
                    <div className="mb-4">
                      <h5 className="font-medium text-gray-900 mb-2">Recommendations</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        {prescription.recommendations.map((rec, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                            {rec}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Clinic Info */}
                    <div className="border-t pt-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          {prescription.clinicAddress}
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4" />
                          {prescription.clinicPhone}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          Next checkup: {new Date(prescription.nextCheckup).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="trends" className="space-y-6">
            {/* Vision Evolution Chart */}
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-blue-600" />
                  Vision Evolution Over Time
                </CardTitle>
                <CardDescription>
                  Track how your prescription has changed over the past 3 years
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {visionTrends.map((trend, index) => (
                    <div key={index} className={`border-l-4 ${getTrendColor(trend.status)} pl-6 relative`}>
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-white border-2 border-current rounded-full"></div>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-gray-900">{trend.period}</h4>
                        <Badge variant="outline" className="text-xs">
                          {index === 0 ? 'Current' : `${index} year${index > 1 ? 's' : ''} ago`}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <div className="text-xs text-gray-500 mb-1">Right Eye SPH</div>
                          <div className="font-mono text-2xl font-bold text-blue-900">{trend.rightSph}</div>
                        </div>
                        <div className="bg-sky-50 p-4 rounded-lg">
                          <div className="text-xs text-gray-500 mb-1">Left Eye SPH</div>
                          <div className="font-mono text-2xl font-bold text-sky-900">{trend.leftSph}</div>
                        </div>
                      </div>
                      <div className="mt-2 text-sm text-gray-600">
                        {trend.status === 'stable' && 'No significant changes'}
                        {trend.status === 'slight-progression' && 'Slight progression noted'}
                        {trend.status === 'progression' && 'Noticeable progression'}
                        {trend.status === 'initial' && 'Initial prescription'}
                        {trend.status === 'baseline' && 'Baseline measurement'}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Health Insights */}
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle>Health Insights</CardTitle>
                <CardDescription>Based on your prescription history and trends</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg border border-green-200">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-green-900">Regular monitoring maintained</p>
                      <p className="text-sm text-green-700">You've been consistent with your eye exams, which is excellent for long-term eye health.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                    <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-yellow-900">Myopia progression observed</p>
                      <p className="text-sm text-yellow-700">Your nearsightedness has gradually increased over time. Consider lifestyle modifications to slow progression.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <Eye className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-blue-900">Astigmatism development</p>
                      <p className="text-sm text-blue-700">Minor astigmatism has been detected in recent exams. This is common and easily correctable.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="current" className="space-y-6">
            {/* Current Prescription Card */}
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="h-5 w-5 text-blue-600" />
                  Current Active Prescription
                </CardTitle>
                <CardDescription>
                  Your most recent prescription details - valid until July 15, 2024
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-gray-900">Right Eye (OD)</h3>
                    <div className="bg-gradient-to-r from-blue-50 to-sky-50 p-6 rounded-lg border border-blue-100">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center">
                          <div className="text-xs text-gray-500 mb-1">SPHERE</div>
                          <div className="text-2xl font-bold text-blue-900">-2.25</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xs text-gray-500 mb-1">CYLINDER</div>
                          <div className="text-2xl font-bold text-blue-900">-0.75</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xs text-gray-500 mb-1">AXIS</div>
                          <div className="text-2xl font-bold text-blue-900">180°</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xs text-gray-500 mb-1">VISUAL ACUITY</div>
                          <div className="text-2xl font-bold text-blue-900">20/20</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold text-gray-900">Left Eye (OS)</h3>
                    <div className="bg-gradient-to-r from-sky-50 to-blue-50 p-6 rounded-lg border border-sky-100">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center">
                          <div className="text-xs text-gray-500 mb-1">SPHERE</div>
                          <div className="text-2xl font-bold text-sky-900">-2.00</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xs text-gray-500 mb-1">CYLINDER</div>
                          <div className="text-2xl font-bold text-sky-900">-0.50</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xs text-gray-500 mb-1">AXIS</div>
                          <div className="text-2xl font-bold text-sky-900">175°</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xs text-gray-500 mb-1">VISUAL ACUITY</div>
                          <div className="text-2xl font-bold text-sky-900">20/20</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">Prescription Summary</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p><strong>Issued by:</strong> Dr. Sarah Johnson, OD</p>
                      <p><strong>Clinic:</strong> Vision Care Center</p>
                      <p><strong>Date:</strong> January 15, 2024</p>
                    </div>
                    <div>
                      <p><strong>Type:</strong> Distance & Near Vision</p>
                      <p><strong>Status:</strong> <span className="text-green-600 font-medium">Active</span></p>
                      <p><strong>Next Exam:</strong> July 15, 2024</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}