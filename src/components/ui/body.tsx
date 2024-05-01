'use client'
import React, { useEffect, useState, useCallback, useMemo } from 'react';
import Earth from "@/components/images/Earth.jpg";
import Forestroot from "@/components/images/forestroot.webp";
import Flower from "@/components/images/flower.jpeg";
import Tree from "@/components/images/Tree.jpg";
import Image from 'next/image';
import Link from 'next/link';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card"
import { title } from 'process';

import { List, SubHeading, myIframe, FeaturTechnology, LatestTechnology } from "./config/card.js";




export default function Body() {


    // const description = list.description;
    const desbordtitle = "Your Gateway to Freelance Success!";
    const deshbordDescript = "Are you a freelancer looking for exciting opportunities? Or a business seeking top talent for your projects? Look no further. Website उपचार is the ultimate destination for freelancers and clients to connect, collaborate, and succeed.";

    const images = useMemo(() => [Flower, Earth, Tree, Forestroot], []);

    const [activeImageIndex, setActiveImageIndex] = useState(0);

    const slideNext = useCallback(() => {
        setActiveImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, [images]);

    useEffect(() => {
        const interval = setInterval(slideNext, 1000);
        return () => clearInterval(interval);
    }, [slideNext]);


    return (
        <div className='flex flex-col justify-center items-center min-h-screen bg-red-100 w-full space-y-16'>

            {/* Start First Section  */}
            <div className="relative w-full max-w-screen-xl">
                <div className='relative border-8 border-slate-800 border-solid rounded-lg shadow-2xl'>
                    <Image
                        src={images[activeImageIndex]}
                        alt="Picture of the author"
                        layout="responsive"
                        width={1200}
                        height={600}
                    // className='rounded-lg'
                    />
                    <Link href="https://github.com/amitkeen/Keycloak/blob/65d7ee7ca77ad3aa6c944eaf9c5d30aef3747b25/keycloak/README.md" target='_blank' className='absolute bottom-5 left-5 bg-lime-50 px-4 py-2 rounded-lg transition duration-700 ease-in-out hover:bg-lime-300'>
                        Explore Here
                    </Link>
                    <div className='absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white'>
                        <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold'>{desbordtitle}</h1>
                        <p className='mt-4 text-lg md:text-xl lg:text-lg text-gray-500'>{deshbordDescript}</p>
                    </div>
                </div>
            </div>

            {/* End First Section  */}


            {/* Start Second Section  */}
            <div className='flex flex-col-4  space-x-4'>

                {myIframe.map((item, index) => {
                    return (
                        <div key={index}>
                            <Card className=' w-80 h-60'>
                                <Link href={item.projectsample}>
                                    <Image
                                        src={item.projectimage}
                                        alt="Picture of the author"
                                        className='h-60 rounded-lg'
                                        width={1200}
                                        height={600}
                                    />
                                </Link>
                            </Card>
                        </div>
                    );
                })}


            </div>

            {/* End Second Section  */}



            {/* Start Thired Section  Featured Technology  */}
            <div>
                {SubHeading.map((item, index) => {
                    return (
                        <div key={index}>
                            <h1 className='text-3xl font-bold font-sans'>{item.Heading}</h1>
                        </div>
                    );
                })}

            </div>
            <div className='flex flex-col-4  space-x-4 justify-center items-center'>
                {FeaturTechnology.map((item, index) => {

                    return (
                        <div key={index}>
                            <Card>
                                <div className=' w-72' key={index}>

                                    <Link href={item.projectsample} ><Image
                                        src={item.image}
                                        alt="Picture of the author"
                                        className='w-80 rounded-xl h-80'
                                        width={1200}
                                        height={600}
                                    /></Link>
                                </div>
                                <CardContent>
                                    {item.cardcontent}
                                </CardContent>
                                <CardFooter className='justify-center items-center font-bold'>
                                    <p>{item.Footer}</p>
                                </CardFooter>
                            </Card>
                        </div>
                    )
                })}

            </div>
            {/* End Third Section Feature Technology */}





            {/* Start fourth Section Latest Technology */}
            <div>
                {SubHeading.map((item, index) => {
                    return (
                        <div key={index}>
                            <h1  className='text-3xl font-bold font-sans'>{item.Heading1}</h1>
                        </div>
                    )
                })}
            </div>
            <div className='flex flex-col-4  space-x-4 justify-center items-center'>
                {LatestTechnology.map((item, index) => {

                    return (
                        <div key={index}>
                            <Card>
                                <div className=' w-72 bg-black rounded-xl'>
                                    <Link href={item.projectsample}>
                                        <Image
                                            src={item.image}
                                            alt="Picture of the author"
                                            className='w-80 rounded-xl h-80'
                                            width={1200}
                                            height={600}
                                        />
                                    </Link>
                                </div>
                                <CardContent>
                                    {item.cardcontent}
                                </CardContent>
                                <CardFooter className='justify-center items-center font-bold'>
                                    <p>{item.Footer}</p>
                                </CardFooter>
                            </Card>
                        </div>
                    )
                })}

            </div>
            {/* End Fourth Section Latest Technology */}

            {/* Start Fifth Section  */}

            <div>
                {SubHeading.map((item, index) => {
                    return (

                        <div key={index} >
                            <h1 >{item.Heading}</h1>
                        </div>
                    )
                })}
            </div>
            <div className='flex flex-col-4  space-x-4 justify-center items-center'>
                {FeaturTechnology.map((item, index) => {

                    return (
                        <div key={index}>
                            <Card>
                                <div className=' w-80'>
                                    <Image
                                        src={Tree}
                                        alt="Picture of the author"
                                        layout="responsive"
                                        className='w-60'
                                        width={1200}
                                        height={600}
                                    />
                                </div>
                                <CardContent>
                                    {item.cardcontent}
                                </CardContent>
                                <CardFooter className='justify-center items-center'>
                                    <p>{item.Footer}</p>
                                </CardFooter>
                            </Card>
                        </div>
                    )
                })}

            </div>

            {/* End Fifth Section  */}

            {/* Start Sixth Section  */}

            <h1>Featured Teachnology</h1>
            <div className='flex flex-col-4  space-x-4'>
                <h1></h1>

                <div>
                    <Card>
                        <div className=' w-80'>
                            <Image
                                src={Tree}
                                alt="Picture of the author"
                                layout="responsive"
                                width={1200}
                                height={600}
                            />
                        </div>
                        <CardContent>
                            {/* <p>Card Content</p> */}
                        </CardContent>
                        <CardFooter>
                            <p>Card Footer</p>
                        </CardFooter>
                    </Card>



                </div>
                <div>
                    <Card>
                        <div className=' w-80'>
                            <Image
                                src={Tree}
                                alt="Picture of the author"
                                layout="responsive"
                                width={1200}
                                height={600}
                            />
                        </div>
                        <CardContent>
                            {/* <p>Card Content</p> */}
                        </CardContent>
                        <CardFooter>
                            <p>Card Footer</p>
                        </CardFooter>
                    </Card>

                </div>
                <div>
                    <Card>
                        <div className=' w-80'>
                            <Image
                                src={Tree}
                                alt="Picture of the author"
                                layout="responsive"
                                width={1200}
                                height={600}
                            />
                        </div>
                        <CardContent>
                            {/* <p>Card Content</p> */}
                        </CardContent>
                        <CardFooter>
                            <p>Card Footer</p>
                        </CardFooter>
                    </Card>

                </div>

                <div>
                    <Card>
                        <div className=' w-80'>
                            <Image
                                src={Tree}
                                alt="Picture of the author"
                                layout="responsive"
                                width={1200}
                                height={600}
                            />
                        </div>
                        <CardContent>
                            {/* <p>Card Content</p> */}
                        </CardContent>
                        <CardFooter>
                            <p>Card Footer</p>
                        </CardFooter>
                    </Card>
                </div>
            </div>

            {/* End Sixth Section  */}


            {/* Start Saventh Section  */}

            <h1>Featured Teachnology</h1>
            <div className='flex flex-col-4  space-x-4'>
                <h1></h1>

                <div>
                    <Card>
                        <div className=' w-80'>
                            <Image
                                src={Tree}
                                alt="Picture of the author"
                                layout="responsive"
                                width={1200}
                                height={600}
                            />
                        </div>
                        <CardContent>
                            {/* <p>Card Content</p> */}
                        </CardContent>
                        <CardFooter>
                            <p>Card Footer</p>
                        </CardFooter>
                    </Card>



                </div>
                <div>
                    <Card>
                        <div className=' w-80'>
                            <Image
                                src={Tree}
                                alt="Picture of the author"
                                layout="responsive"
                                width={1200}
                                height={600}
                            />
                        </div>
                        <CardContent>
                            {/* <p>Card Content</p> */}
                        </CardContent>
                        <CardFooter>
                            <p>Card Footer</p>
                        </CardFooter>
                    </Card>

                </div>
                <div>
                    <Card>
                        <div className=' w-80'>
                            <Image
                                src={Tree}
                                alt="Picture of the author"
                                layout="responsive"
                                width={1200}
                                height={600}
                            />
                        </div>
                        <CardContent>
                            {/* <p>Card Content</p> */}
                        </CardContent>
                        <CardFooter>
                            <p>Card Footer</p>
                        </CardFooter>
                    </Card>

                </div>

                <div>
                    <Card>
                        <div className=' w-80'>
                            <Image
                                src={Tree}
                                alt="Picture of the author"
                                layout="responsive"
                                width={1200}
                                height={600}
                            />
                        </div>
                        <CardContent>
                            {/* <p>Card Content</p> */}
                        </CardContent>
                        <CardFooter>
                            <p>Card Footer</p>
                        </CardFooter>
                    </Card>
                </div>
            </div>

            {/* End Seventh Section  */}

            <div className='w-full max-w-screen-xl mt-8'>
                <h2 className='text-3xl font-bold'>Heading</h2>
                {/* Add content here */}
            </div>
            <div className="flex justify-center">
                <Carousel className="flex justify-center h-auto w-full border-4 border-indigo-500/50">
                    <CarouselContent>
                        {List.map((item, index) => {
                            return (
                                <CarouselItem key={index} className="h-[400px]">
                                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                                        <div className="px-6 py-4">
                                            <div className=" text-xl mb-2 flex">
                                                <Card key={index}>
                                                    <div className=" w-80">
                                                        <Image
                                                            src={item.img}
                                                            alt={item.title}
                                                            width={1200}
                                                            height={600}

                                                        />
                                                    </div>
                                                    <CardContent>
                                                        <h1 className='flex justify-center font-bold'>{item.name} </h1>
                                                        <p>
                                                            {item.description}
                                                        </p>
                                                    </CardContent>
                                                    <CardFooter className="">
                                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                                            Next js.
                                                        </span>
                                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                                            Java
                                                        </span>
                                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                                            Figma
                                                        </span>
                                                    </CardFooter>
                                                </Card>
                                            </div>
                                            <p className="text-gray-700 text-base">
                                                I am a software developer
                                                working on the NPI Project at
                                                Keen and Able Computer Pvt. Ltd.
                                            </p>
                                        </div>
                                        <div className="px-6 pt-4 pb-2">
                                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                                Next js.
                                            </span>
                                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                                Java
                                            </span>
                                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                                Figma
                                            </span>
                                        </div>
                                    </div>
                                </CarouselItem>
                            );
                        })}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </div>
    );
}
