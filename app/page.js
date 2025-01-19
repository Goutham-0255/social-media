import NavigationCard from "@/components/NavigationCard";
import Card from "../components/Card";

export default function Home() {
  return (
    <div className='flex mt-4 max-w-6xl mx-auto  gap-6'>
      <div className='w-1/3'>
        <NavigationCard />
      </div>
      <div className="grow">
        <Card>
          Form
        </Card>
        <Card>
          post
        </Card>
      </div>


    </div>
    
  );
}
