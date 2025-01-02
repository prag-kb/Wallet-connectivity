import React from 'react'
import {Card, Button} from "antd"
import PhantomIcon from './assets/phantom.svg';
import MetaMaskIcon from './assets/MetaMask_Fox.svg';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r shadow-black from-[#e2dffe] from-25% via-[#E7C5C0] via-61% to-[#F6811B] to-90%">
      <div className="flex justify-center items-center self-center origin-center object-center">
        <Card title={<Icons/>} className='w-[20rem]'>
          <div className="grid gap-3">
            <Button>Use Phantom</Button>
            <Button>Use MetaMask</Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default App

const Icons = () => {
  return (
    <div className="my-3">
    <div className="flex mb-2 gap-5 justify-center">
        <img src={PhantomIcon} alt='phantom wallet' width={50} height="100" className='rounded-md'/>
        <img src={MetaMaskIcon} alt='metamask wallet' width={50} height="100" />
    </div>
    <div className="text-wrap text-sm mx-8">Which extension do you want to connect with?</div>
    </div>
  )
}