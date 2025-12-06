import React, { useState } from 'react';

const AppointmentForm: React.FC = () => {
  const [formData, setFormData] = useState({
    ownerName: '',
    ownerAddress: '',
    ownerCpf: '',
    ownerSex: '',
    ownerPhone: '',
    ownerEmail: '',
    petName: '',
    petBreed: '',
    petAge: '',
    serviceBath: false,
    serviceGrooming: false,
    deliveryMethod: 'local',
    appointmentDate: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
        const checked = (e.target as HTMLInputElement).checked;
        setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
        setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.serviceBath && !formData.serviceGrooming) {
      alert('Por favor, selecione pelo menos um serviço.');
      return;
    }
    alert(`Cadastro realizado com sucesso!\nAgendamento para ${formData.petName} confirmado para ${new Date(formData.appointmentDate).toLocaleString('pt-BR')}.`);
  };

  return (
    <section id="agendamento" className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden my-12 border border-slate-100">
      <div className="bg-gradient-to-r from-orange-500 to-red-500 p-8 text-white text-center">
        <h2 className="text-3xl font-bold mb-2">Agende seu Horário</h2>
        <p className="text-orange-50">Preencha o formulário para cadastrar seu pet e garantir seu atendimento.</p>
      </div>
      
      <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-8">
        
        {/* Dados do Cliente */}
        <fieldset className="border border-slate-200 p-6 rounded-lg bg-slate-50/50">
            <legend className="text-xl font-bold text-slate-700 px-2 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
              Dados do Tutor
            </legend>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div>
                    <label htmlFor="ownerName" className="block text-sm font-semibold text-slate-700 mb-1">Nome Completo *</label>
                    <input type="text" id="ownerName" name="ownerName" required placeholder="Ex: João da Silva" 
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition"
                        onChange={handleChange} value={formData.ownerName} />
                </div>
                <div>
                    <label htmlFor="ownerCpf" className="block text-sm font-semibold text-slate-700 mb-1">CPF *</label>
                    <input type="text" id="ownerCpf" name="ownerCpf" required placeholder="000.000.000-00"
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition"
                        onChange={handleChange} value={formData.ownerCpf} />
                </div>
                <div className="md:col-span-2">
                    <label htmlFor="ownerAddress" className="block text-sm font-semibold text-slate-700 mb-1">Endereço Completo</label>
                    <input type="text" id="ownerAddress" name="ownerAddress" placeholder="Rua, Número, Bairro"
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition"
                        onChange={handleChange} value={formData.ownerAddress} />
                </div>
                <div>
                    <label htmlFor="ownerEmail" className="block text-sm font-semibold text-slate-700 mb-1">E-mail *</label>
                    <input type="email" id="ownerEmail" name="ownerEmail" required placeholder="email@exemplo.com"
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition"
                        onChange={handleChange} value={formData.ownerEmail} />
                </div>
                <div>
                    <label htmlFor="ownerPhone" className="block text-sm font-semibold text-slate-700 mb-1">Telefone *</label>
                    <input type="tel" id="ownerPhone" name="ownerPhone" required placeholder="(XX) XXXXX-XXXX"
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition"
                        onChange={handleChange} value={formData.ownerPhone} />
                </div>
                
                <div>
                    <span className="block text-sm font-semibold text-slate-700 mb-2">Sexo</span>
                    <div className="flex space-x-6 mt-2">
                        <label className="flex items-center space-x-2 cursor-pointer group">
                            <input type="radio" name="ownerSex" value="M" className="accent-orange-500 w-4 h-4" onChange={handleChange} />
                            <span className="text-slate-700 group-hover:text-orange-600 transition">Masculino</span>
                        </label>
                        <label className="flex items-center space-x-2 cursor-pointer group">
                            <input type="radio" name="ownerSex" value="F" className="accent-orange-500 w-4 h-4" onChange={handleChange} />
                            <span className="text-slate-700 group-hover:text-orange-600 transition">Feminino</span>
                        </label>
                    </div>
                </div>
            </div>
        </fieldset>

        {/* Dados do Pet */}
        <fieldset className="border border-slate-200 p-6 rounded-lg bg-slate-50/50">
             <legend className="text-xl font-bold text-slate-700 px-2 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              Dados do Pet
            </legend>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                <div className="md:col-span-1">
                    <label htmlFor="petName" className="block text-sm font-semibold text-slate-700 mb-1">Nome do Pet *</label>
                    <input type="text" id="petName" name="petName" required placeholder="Ex: Rex"
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition"
                        onChange={handleChange} value={formData.petName} />
                </div>
                <div>
                    <label htmlFor="petBreed" className="block text-sm font-semibold text-slate-700 mb-1">Raça</label>
                    <input type="text" id="petBreed" name="petBreed" placeholder="Ex: Labrador"
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition"
                        onChange={handleChange} value={formData.petBreed} />
                </div>
                <div>
                    <label htmlFor="petAge" className="block text-sm font-semibold text-slate-700 mb-1">Idade (anos)</label>
                    <input type="number" id="petAge" name="petAge" min="0" placeholder="0"
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition"
                        onChange={handleChange} value={formData.petAge} />
                </div>
            </div>
        </fieldset>

        {/* Serviços e Agendamento */}
        <fieldset className="border border-slate-200 p-6 rounded-lg bg-slate-50/50">
             <legend className="text-xl font-bold text-slate-700 px-2 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              Serviços e Agendamento
            </legend>
            
            <div className="mt-4 space-y-6">
                <div>
                    <span className="block text-sm font-semibold text-slate-700 mb-2">Serviços Desejados *</span>
                    <div className="flex space-x-6 p-3 bg-white rounded-lg border border-slate-200">
                        <label className="flex items-center space-x-2 cursor-pointer text-slate-700 hover:text-orange-600 transition">
                            <input type="checkbox" name="serviceBath" className="w-5 h-5 accent-orange-500 rounded focus:ring-orange-500" 
                             onChange={handleChange} checked={formData.serviceBath} />
                            <span className="font-medium">Banho</span>
                        </label>
                        <label className="flex items-center space-x-2 cursor-pointer text-slate-700 hover:text-orange-600 transition">
                            <input type="checkbox" name="serviceGrooming" className="w-5 h-5 accent-orange-500 rounded focus:ring-orange-500"
                             onChange={handleChange} checked={formData.serviceGrooming} />
                            <span className="font-medium">Tosa</span>
                        </label>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <span className="block text-sm font-semibold text-slate-700 mb-2">Método de Atendimento</span>
                        <div className="flex flex-col space-y-3 p-3 bg-white rounded-lg border border-slate-200">
                            <label className="flex items-center space-x-2 cursor-pointer text-slate-700 hover:text-orange-600 transition">
                                <input type="radio" name="deliveryMethod" value="pickup" 
                                    className="accent-orange-500 w-4 h-4"
                                    onChange={handleChange} checked={formData.deliveryMethod === 'pickup'} />
                                <span><span className="font-bold">Tele-busca</span> (Buscamos e levamos)</span>
                            </label>
                            <label className="flex items-center space-x-2 cursor-pointer text-slate-700 hover:text-orange-600 transition">
                                <input type="radio" name="deliveryMethod" value="local" 
                                    className="accent-orange-500 w-4 h-4"
                                    onChange={handleChange} checked={formData.deliveryMethod === 'local'} />
                                <span><span className="font-bold">Entrega no local</span> (Cliente traz o pet)</span>
                            </label>
                        </div>
                    </div>
                    <div>
                         <label htmlFor="appointmentDate" className="block text-sm font-semibold text-slate-700 mb-2">Data e Hora Preferencial *</label>
                         <input type="datetime-local" id="appointmentDate" name="appointmentDate" required
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition"
                            onChange={handleChange} value={formData.appointmentDate} />
                    </div>
                </div>
            </div>
        </fieldset>

        <div className="text-center pt-4">
            <button type="submit" 
                className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-10 rounded-full shadow-lg transform transition hover:scale-105 duration-300 flex items-center justify-center mx-auto gap-2">
                <span>Confirmar Agendamento</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
            </button>
        </div>

      </form>
    </section>
  );
};

export default AppointmentForm;