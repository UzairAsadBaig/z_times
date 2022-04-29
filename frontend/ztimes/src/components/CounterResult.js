import React, { useState, useEffect } from 'react'
import './counterComp/counterComp.css';
import { useGetWinnerQuery } from '../redux/nodeAPI';



const CounterResult=() => {




  const [ random, setRandom ]=useState( {
    num1: 0,
    num2: 1,
    num3: 7,
    num4: 5,
  } );

  const { data, isLoading, isError, refetch }=useGetWinnerQuery();

  console.log( !isLoading&&data );



  useEffect( () => {
    setInterval( function () {
      setRandom( {
        num1: Math.floor( Math.random()*10 ),
        num2: Math.floor( Math.random()*10 ),
        num3: Math.floor( Math.random()*10 ),
        num4: Math.floor( Math.random()*10 ),
      } );

    }, 10 );




  }, [] )


  // useEffect(() => {




  // }, [])


  return (


    <div className="counter row justify-content-center" data-aos="zoom-in">


      <div className="count">{random.num1}</div>
      <div className="count">{random.num2}</div>
      <div className="count">{random.num3}</div>
      <div className="count">{random.num4}</div>




      {/* cw&&cw.map( ( el, i ) => {
                return <>
                  <h1 className='text-center' style={{ textDecoration: "underline" }}>Winner {cw?.length>1? i+1:""}</h1>
                  <div className="count">{el.winner.num1}</div><div className="count">{el.winner.num2}</div><div className="count">{el.winner.num3}</div><div className="count">{el.winner.num4}</div>
                </>
              } )
    */}


    </div>
  )
}

export default CounterResult