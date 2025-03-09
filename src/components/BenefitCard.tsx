
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const BenefitCard = ({ icon: Icon, title, description }: BenefitCardProps) => {
  return (
    <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300 h-full">
      <CardHeader className="pb-2">
        <div className="mb-2 text-connectu-blue">
          <Icon size={32} />
        </div>
        <CardTitle className="text-xl font-semibold text-connectu-blue">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

export default BenefitCard;
