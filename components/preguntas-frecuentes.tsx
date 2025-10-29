"use client"

import { title } from 'process'
import React from 'react'
import {easeInOut, motion, spring} from 'framer-motion'

import { CreditCard, ShieldCheck, HelpCircle } from "lucide-react";

const preguntas = [
  {
    title: "¿Qué servicios ofrecen?",
    pregunta: "¿Cuál es el proceso para contratar sus servicios?",
    respuesta: "El proceso comienza con una consulta inicial para entender sus necesidades.",
    icon: <HelpCircle className="w-6 h-6 text-primary" />, // Ícono de ayuda
  },
  {
    title: "Métodos de pago",
    pregunta: "¿Qué métodos de pago aceptan?",
    respuesta: "Aceptamos tarjetas de crédito, transferencias bancarias y PayPal.",
    icon: <CreditCard className="w-6 h-6 text-primary" />, // Ícono de tarjeta de crédito
  },
  {
    title: "Garantía",
    pregunta: "¿Ofrecen garantía en sus servicios?",
    respuesta: "Sí, ofrecemos una garantía de satisfacción de 30 días.",
    icon: <ShieldCheck className="w-6 h-6 text-primary" />, // Ícono de garantía
  },
];

function PreguntasFrecuentes() {
  return (
    
    <section className='py-10 mt-auto mb-10 px-4 lg:px-8 bg-muted/30 shadow-lg shadow-primary/30'>
      <div className='container mx-auto max-w-4xl'>
        <div className='text-center mb-12'>
        <h1 className="text-6xl text-center font-bold text-foreground ">
              Preguntas{" "}
              <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">Frecuentes</span>
        </h1>
        </div>
        
        <div className='overflow-hidden bg-linear-to-b from-background via-primary/5 to-background/5 rounded-xl'>
          {preguntas.map((item, index) => (
            <motion.div key={index}
            className='rounded-lg m-8 p-4 border border-border bg-card shadow-md hover:shadow-lg hover:shadow-blue-500 transition-all '>
              
              <button className='w-auto flex items-center gap-2 text-left py-4 px-4 bg-card text-foreground font-medium'>
                {item.icon} {/* Renderizar el ícono */}
                {item.pregunta}
              </button>
              <div className='px-4 py-3 text-muted-foreground'>
                {item.respuesta}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PreguntasFrecuentes