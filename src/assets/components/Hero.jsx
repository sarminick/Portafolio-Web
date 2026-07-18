import { ArrowRightIcon, Download, Mail, MapPin } from 'lucide-react';

export default function Hero() {

    return (
        <section id="inicio" className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden grid-pattern">
            {/* Decorative Glows */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl -z-10 animate-pulse-subtitle animate-delay-200"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    {/* Text Presentation */}
                    <div className="flex-1 text-center lg:text-left space-y-6 animate-slide-up">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-indigo-400">
                            <span className="flex h-2.5 w-2.5 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                            </span>
                            Disponible para proyectos
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
                            Hola, soy <br />
                            <span className="text-gradient-primary">Diego Sarmiento</span>
                        </h1>

                        <h2 className="text-xl sm:text-2xl font-bold text-slate-200">
                            Desarrollador Web Full Stack
                        </h2>

                        <p className="text-slate-400 max-w-xl mx-auto lg:mx-0 text-base sm:text-lg leading-relaxed">Tengo experiencia en <strong className="text-white">React Js, JavaScript, PHP, MySQL y WordPress</strong>Actualmente busco oportunidades remotas para construir y desplegar aplicaciones web escalables y eficientes.</p>

                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-sm text-slate-400">
                            <span className="flex items-center gap-1.5 bg-slate-900/60 border border-slate-800 px-3 py-1.5 rounded-lg">
                                <MapPin size={16} className="text-indigo-400"/> Colombia / Remoto
                            </span>
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
                            <a href="#proyectos" className="group inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 py-3 rounded-xl transition-all shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/30 hover:-translate-y-0.5">
                                Ver proyectos
                                <ArrowRightIcon size={18} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            
                            <button>
                                Descargar CV
                                <Download size={18} />
                            </button>

                            <a href="#contacto">
                                Contactarme
                                <Mail size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Photo / Avatar */}
                    <div>
                        <div>
                            {/* Glowing Backgroud Ring */}
                            <div></div>

                            {/* Image Container */}
                            <div>
                                <img />
                            </div>

                            {/* Float Card Overlay */}
                            <div>
                                <div>

                                </div>
                                <div>
                                    <p>Especialidad</p>
                                    <p>Full Stack Dev</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};