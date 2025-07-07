import React from 'react';

type CardProps = {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  bordered?: boolean;
};

export const Card = (props: CardProps) => {
  const {
    children,
    className = '',
    hoverable = false,
    bordered = true,
  } = props;

  return (
    <div
      className={`
        bg-white rounded-lg overflow-hidden
        ${bordered ? 'border border-gray-200' : ''}
        ${hoverable ? 'transition-shadow hover:shadow-lg' : 'shadow-md'}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

type CardHeaderProps = {
  children: React.ReactNode;
  className?: string;
};

export const CardHeader = (props: CardHeaderProps) => {
  const { children, className = '' } = props;
  
  return (
    <div className={`px-6 py-4 border-b border-gray-200 ${className}`}>
      {children}
    </div>
  );
};

type CardBodyProps = {
  children: React.ReactNode;
  className?: string;
};

export const CardBody = (props: CardBodyProps) => {
  const { children, className = '' } = props;
  
  return (
    <div className={`px-6 py-4 ${className}`}>
      {children}
    </div>
  );
};

type CardFooterProps = {
  children: React.ReactNode;
  className?: string;
};

export const CardFooter = (props: CardFooterProps) => {
  const { children, className = '' } = props;
  
  return (
    <div className={`px-6 py-4 border-t border-gray-200 ${className}`}>
      {children}
    </div>
  );
};