import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CalendarIcon } from "lucide-react"

export default function ProfessionalCertificateGenerator() {
  const [certNo, setCertNo] = useState('')
  const [name, setName] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [domain, setDomain] = useState('')

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center text-primary">Professional Certificate Generator</h1>
      
      <div className="grid grid-cols-2 gap-6">
        <div>
          <Label htmlFor="certNo">Certificate Number</Label>
          <Input id="certNo" value={certNo} onChange={(e) => setCertNo(e.target.value)} placeholder="e.g. IPIC#11842" />
        </div>
        <div>
          <Label htmlFor="name">Name</Label>
          <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter full name" />
        </div>
        <div>
          <Label htmlFor="startDate">Start Date</Label>
          <div className="relative">
            <Input id="startDate" type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
            <CalendarIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        <div>
          <Label htmlFor="endDate">End Date</Label>
          <div className="relative">
            <Input id="endDate" type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
            <CalendarIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        <div className="col-span-2">
          <Label htmlFor="domain">Domain</Label>
          <Input id="domain" value={domain} onChange={(e) => setDomain(e.target.value)} placeholder="e.g. AI/ML Programming" />
        </div>
      </div>
      
      <div className="border-4 border-primary p-8 rounded-lg bg-white shadow-2xl">
        <div className="relative">
          {/* Top left logo */}
          <img src="/placeholder.svg?height=100&width=100" alt="InternPe Logo" className="absolute top-0 left-0 w-24 h-24" />
          
          {/* Top right text */}
          <div className="absolute top-0 right-0 bg-primary text-white py-2 px-4 rounded-bl-lg text-lg font-semibold">
            @internPE
          </div>
          
          <div className="text-center space-y-6 pt-28">
            <h2 className="text-4xl font-bold text-primary">INTERNSHIP COMPLETION CERTIFICATE</h2>
            <p className="text-2xl font-semibold">CID : {certNo || 'IPIC#11842'}</p>
            <p className="text-xl italic">To whomever it may concern</p>
            <p className="text-xl">
              This is to certify that <strong className="text-2xl text-primary">{name || 'HAZIFA PARVAIZ'}</strong> worked as an Intern in our company
            </p>
            <p className="text-xl">
              from <span className="font-semibold">{startDate || '08-Jan-2024'}</span> to <span className="font-semibold">{endDate || '05-Feb-2024'}</span>
            </p>
            <p className="text-xl mt-6 font-semibold">Please find the internship details below:</p>
            <div className="grid grid-cols-2 gap-4 text-left max-w-2xl mx-auto text-lg">
              <p><strong>Company Name:</strong> InternPe</p>
              <p><strong>Location:</strong> Remote</p>
              <p><strong>Domain:</strong> {domain || 'AI/ML Programming'}</p>
              <p><strong>Designation:</strong> Intern</p>
            </div>
            <p className="mt-8 text-lg">
              During their working period, we found them to be a sincere and dedicated
              intern with a professional attitude and very good knowledge of the job.
            </p>
            <p className="mt-4 text-lg">
              We thank them for their efforts and contribution and wish them the
              best in future endeavors.
            </p>
            <p className="mt-8 font-semibold text-xl">Yours Sincerely</p>
            <div className="flex justify-center items-end space-x-12 mt-6">
              <div className="text-center">
                <img src="/placeholder.svg?height=50&width=150" alt="Signature" className="mx-auto mb-2" />
                <p className="font-semibold">(Co-Founder)</p>
                <p className="font-bold text-primary">InternPe</p>
              </div>
              <img src="/placeholder.svg?height=120&width=120" alt="InternPe Seal" className="w-28 h-28" />
            </div>
          </div>
          
          {/* Bottom logos */}
          <div className="flex justify-between items-center mt-12">
            <img src="/placeholder.svg?height=80&width=80" alt="ISO 9001:2015" className="w-20 h-20" />
            <img src="/placeholder.svg?height=80&width=80" alt="MSME" className="w-20 h-20" />
            <img src="/placeholder.svg?height=80&width=80" alt="AICTE" className="w-20 h-20" />
          </div>
          
          {/* Website URL */}
          <p className="text-center mt-6 text-primary text-lg font-semibold">https://internpe.in/</p>
        </div>
      </div>
      
      <div className="text-center">
        <Button onClick={() => window.print()} className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-lg text-lg">
          Print Certificate
        </Button>
      </div>
    </div>
  )
}