import Image from 'next/image';
import CustomButton from './CustomButton';

const Hero = () => {
  return (
    <div className='hero'>
      <div className="flex-1 padding-x" style={{ paddingTop: '9rem' }}>
        <h1 className="hero__title">
          FIND YOUR DREAM <br /> — quickly and easily!
        </h1>

        <p className='hero__subtitle'>
          Our catalog will surprise you. Rather, discover an unprecedented offers of luxury properties.
        </p>

        <CustomButton />
      </div>
    </div>
  )
}

export default Hero
