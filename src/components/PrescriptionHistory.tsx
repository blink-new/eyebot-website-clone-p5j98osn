import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Separator } from './ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Calendar, Search, TrendingUp, Eye, FileText, Clock, AlertCircle, CheckCircle } from 'lucide-react';

const PrescriptionHistory = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data for prescription history
  const prescriptionHistory = [
    {
      id: 1,
      date: '2024-01-15',
      rightEye: { sph: -2.25, cyl: -0.75, axis: 180 },
      leftEye: { sph: -2.00, cyl: -0.50, axis: 175 },
      doctor: 'Dr. Sarah Johnson',
      clinic: 'Vision Care Center',
      status: 'active',
      notes: 'Mild astigmatism progression noted',
      nextCheckup: '2024-07-15'
    },
    {
      id: 2,
      date: '2023-01-10',
      rightEye: { sph: -2.00, cyl: -0.50, axis: 178 },
      leftEye: { sph: -1.75, cyl: -0.25, axis: 172 },
      doctor: 'Dr. Michael Chen',
      clinic: 'EyeCare Plus',
      status: 'expired',
      notes: 'Stable vision, no significant changes',
      nextCheckup: '2024-01-10'
    },
    {
      id: 3,
      date: '2022-02-20',
      rightEye: { sph: -1.75, cyl: -0.25, axis: 175 },
      leftEye: { sph: -1.50, cyl: -0.25, axis: 170 },
      doctor: 'Dr. Emily Roberts',
      clinic: 'Clear Vision Institute',
      status: 'expired',
      notes: 'First time prescription, adapting well',
      nextCheckup: '2023-02-20'
    }
  ];

  const healthMetrics = [
    { label: 'Last Eye Exam', value: '3 months ago', status: 'good' },
    { label: 'Prescription Status', value: 'Active', status: 'good' },
    { label: 'Next Checkup', value: '4 months', status: 'warning' },
    { label: 'Risk Level', value: 'Low', status: 'good' }
  ];

  const visionTrends = [
    { period: 'Jan 2022', rightSph: -1.75, leftSph: -1.50 },
    { period: 'Jan 2023', rightSph: -2.00, leftSph: -1.75 },
    { period: 'Jan 2024', rightSph: -2.25, leftSph: -2.00 }
  ];

  const filteredHistory = prescriptionHistory.filter(
    prescription => 
      prescription.doctor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      prescription.clinic.toLowerCase().includes(searchTerm.toLowerCase()) ||
      prescription.notes.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'expired':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getMetricStatusIcon = (status: string) => {
    switch (status) {
      case 'good':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'warning':
        return <AlertCircle className="h-4 w-4 text-yellow-500" />;
      case 'danger':
        return <AlertCircle className="h-4 w-4 text-red-500" />;
      default:
        return <CheckCircle className="h-4 w-4 text-gray-500" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Eye Health Dashboard</h1>
        <p className="text-gray-600">Track your prescription history and monitor your eye health evolution</p>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="history">Prescription History</TabsTrigger>
          <TabsTrigger value="trends">Health Trends</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Health Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {healthMetrics.map((metric, index) => (
              <Card key={index} className="border-0 shadow-sm">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-600">{metric.label}</span>
                    {getMetricStatusIcon(metric.status)}
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Current Prescription */}
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="h-5 w-5 text-blue-600" />
                Current Prescription
              </CardTitle>
              <CardDescription>Your most recent prescription details</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900">Right Eye (OD)</h3>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-xs text-gray-500 mb-1">SPH</div>
                        <div className="text-lg font-bold text-blue-900">-2.25</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-500 mb-1">CYL</div>
                        <div className="text-lg font-bold text-blue-900">-0.75</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-500 mb-1">AXIS</div>
                        <div className="text-lg font-bold text-blue-900">180°</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900">Left Eye (OS)</h3>
                  <div className="bg-sky-50 p-4 rounded-lg">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-xs text-gray-500 mb-1">SPH</div>
                        <div className="text-lg font-bold text-sky-900">-2.00</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-500 mb-1">CYL</div>
                        <div className="text-lg font-bold text-sky-900">-0.50</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-500 mb-1">AXIS</div>
                        <div className="text-lg font-bold text-sky-900">175°</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Separator className="my-6" />

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Issued by <span className="font-medium">Dr. Sarah Johnson</span></p>
                  <p className="text-sm text-gray-500">Vision Care Center • January 15, 2024</p>
                </div>
                <Badge className={getStatusColor('active')}>Active</Badge>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="space-y-6">
          {/* Search */}
          <Card className="border-0 shadow-sm">
            <CardContent className="p-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search by doctor, clinic, or notes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </CardContent>
          </Card>

          {/* Prescription History */}
          <div className="space-y-4">
            {filteredHistory.map((prescription) => (
              <Card key={prescription.id} className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <Calendar className="h-4 w-4 text-gray-500" />
                        <span className="font-semibold text-gray-900">
                          {new Date(prescription.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </span>
                        <Badge className={getStatusColor(prescription.status)}>
                          {prescription.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600">{prescription.doctor} • {prescription.clinic}</p>
                    </div>
                    <Button variant="outline" size="sm">
                      <FileText className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">Right Eye (OD)</h4>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="text-sm space-y-1">
                          <div>SPH: <span className="font-mono">{prescription.rightEye.sph}</span></div>
                          <div>CYL: <span className="font-mono">{prescription.rightEye.cyl}</span></div>
                          <div>AXIS: <span className="font-mono">{prescription.rightEye.axis}°</span></div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">Left Eye (OS)</h4>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="text-sm space-y-1">
                          <div>SPH: <span className="font-mono">{prescription.leftEye.sph}</span></div>
                          <div>CYL: <span className="font-mono">{prescription.leftEye.cyl}</span></div>
                          <div>AXIS: <span className="font-mono">{prescription.leftEye.axis}°</span></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {prescription.notes && (
                    <div className="bg-blue-50 p-3 rounded-lg mb-4">
                      <p className="text-sm text-blue-900">{prescription.notes}</p>
                    </div>
                  )}

                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      Next checkup: {new Date(prescription.nextCheckup).toLocaleDateString()}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="trends" className="space-y-6">
          {/* Vision Trends */}
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-blue-600" />
                Vision Evolution
              </CardTitle>
              <CardDescription>Track how your prescription has changed over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {visionTrends.map((trend, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-900">{trend.period}</h4>
                      <Badge variant="outline">{index === 0 ? 'Current' : `${index + 1} year${index > 0 ? 's' : ''} ago`}</Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <div className="text-xs text-gray-500 mb-1">Right Eye SPH</div>
                        <div className="font-mono text-lg font-bold text-blue-900">{trend.rightSph}</div>
                      </div>
                      <div className="bg-sky-50 p-3 rounded-lg">
                        <div className="text-xs text-gray-500 mb-1">Left Eye SPH</div>
                        <div className="font-mono text-lg font-bold text-sky-900">{trend.leftSph}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Health Recommendations */}
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle>Health Recommendations</CardTitle>
              <CardDescription>Based on your prescription history and trends</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-green-900">Regular checkups maintained</p>
                    <p className="text-sm text-green-700">You're doing great keeping up with your eye exams!</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
                  <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-yellow-900">Slight myopia progression</p>
                    <p className="text-sm text-yellow-700">Your nearsightedness has increased slightly. Consider limiting screen time and taking regular breaks.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                  <Eye className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-blue-900">Astigmatism stable</p>
                    <p className="text-sm text-blue-700">Your astigmatism has remained relatively stable over the past year.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PrescriptionHistory;