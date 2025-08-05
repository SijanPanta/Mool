import React from 'react';

const ImpactSection: React.FC = () => {
  return (
    <>
      <h2 id='impact' className="text-[#181411] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Impact Wallet</h2>
      <div className="flex flex-col gap-3 p-4">
        <div className="flex gap-6 justify-between"><p className="text-[#181411] text-base font-medium leading-normal">Community Support</p></div>
        <div className="rounded bg-[#e6e0db]"><div className="h-2 rounded bg-[#181411]" style={{ width: '75%' }}></div></div>
        <p className="text-[#897561] text-sm font-normal leading-normal">75% of proceeds go directly to community projects</p>
      </div>
    </>
  );
};

export default ImpactSection;