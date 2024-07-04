import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="container mx-auto h-[90vh] px-4">
      <div className="mt-40 flex justify-center">
        <Card className=''>
          <CardHeader>
            <Image src="/puskanas.png" alt="thumbnail" className="" fill />
            <CardTitle>SIGN IN</CardTitle>
            <CardDescription>Pusat Kejuaraan Sains Nasional</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Email</p>
          </CardContent>
          <Input placeholder='Email'/>
          <CardContent>
            <p>Password</p>
          </CardContent>
          <Input placeholder='Password' type='password'/>
          <CardFooter>
            <p>Dont Have Account? <a href="" className='text-fuchsia-600'>sign up</a></p>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
