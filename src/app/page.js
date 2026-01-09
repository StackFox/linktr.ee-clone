import Form from 'next/form'

export default function Home() {
  return (
    <div className="grid-cols-2 w-3xl justify-center items-center ml-60 mt-36 text-8xl text-[#254f1a] text-wrap">
      <p className="font-extrabold w-3xl">A link in bio built for you.</p>

      <p className="text-[30px] mt-10 w-250">
        Join 70M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.
      </p>
      <div>
        <Form action='/' className='text-[20px] mt-26'>
          <input placeholder="linktr.ee/" name='linktr.ee' type="text" className='bg-white text-black p-4 rounded-lg'/>
          <button type='submit' className='pl-8 text-white bg-[#254f1a] p-5 rounded-4xl ml-2'>Get started for free</button>
        </Form>
      </div>
    </div>
  );
}
