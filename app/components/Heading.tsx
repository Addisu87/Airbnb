"use client";

interface HeadingProps {
  title: string;
  subtitle?: string;
}

const Heading: React.FC<HeadingProps> = ({ title, subtitle }) => {
  return (
    <>
      <div className="text-2xl font-semibold tracking-tight transition-colors">
        {title}
      </div>
      <div className="font-light text-neutral-500 mt-2">{subtitle}</div>
    </>
  );
};

export default Heading;
