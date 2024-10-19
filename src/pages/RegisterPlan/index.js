import React, { useEffect, useState } from 'react'
import { Link, Outlet, useLocation } from "react-router-dom"
import Steps from "../../components/Steps"
import "./register-plan.css"

const Index = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const steps = [{ position: 1, path: '', title: 'Planes y coberturas' }, { position: 2, path: 'summary', title: 'Resumen' }];
    const location = useLocation();
    useEffect(() => {
        const split = location.pathname.split('/')
        const pop = split.pop()
        const pos = steps.find(s => s.path == pop);
        if (undefined == pos) {
            setCurrentStep(1)
        } else
            setCurrentStep(pos.position)
    }, [currentStep])
    return (
        <div className='steps'>
            <div className='steps__current'>
                <Steps steps={steps} currentStep={currentStep} />
            </div>
            <div className='container' >
                    <Link to="/">Volver</Link>
            </div>
            <Outlet />

        </div>
    )
}

export default Index