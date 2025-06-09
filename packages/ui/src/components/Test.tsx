export interface TestProps {
  className?: string;
  title: string;
}

const Test = ({ className, title }: TestProps) => {
  return <div className={`${className}`}>{title}</div>;
};

export default Test;
