export const ServiceIcons = {
  TireService: () => (
    <div className="w-12 h-12 flex items-center justify-center group">
      <img 
        src="/images/tire-wheel-icon.png"
        alt="Tire and Wheel Service"
        className="w-12 h-12 object-contain transition-all duration-300 group-hover:rotate-180 group-hover:scale-110"
        style={{
          filter: 'brightness(0) saturate(100%) invert(17%) sepia(100%) saturate(3533%) hue-rotate(348deg) brightness(85%) contrast(95%)'
        }}
      />
    </div>
  ),
  
  AutoRepair: () => (
    <div className="w-12 h-12 flex items-center justify-center group">
      <img 
        src="/images/auto-repair-icon.png"
        alt="Auto Repair Service"
        className="w-12 h-12 object-contain transition-all duration-500 group-hover:animate-pulse group-hover:scale-110"
        style={{
          filter: 'brightness(0) saturate(100%) invert(29%) sepia(100%) saturate(1686%) hue-rotate(211deg) brightness(97%) contrast(101%)'
        }}
      />
    </div>
  ),
  
  OilChange: () => (
    <div className="w-12 h-12 flex items-center justify-center group">
      <img 
        src="/images/oil-change-icon.png"
        alt="Oil Change Service"
        className="w-12 h-12 object-contain transition-all duration-300 group-hover:animate-bounce group-hover:scale-105"
        style={{
          filter: 'brightness(0) saturate(100%) invert(60%) sepia(98%) saturate(1352%) hue-rotate(21deg) brightness(101%) contrast(103%)'
        }}
      />
    </div>
  ),
  
  BrakeRepair: () => (
    <div className="w-12 h-12 flex items-center justify-center group">
      <img 
        src="/images/brake-icon.png"
        alt="Brake Service"
        className="w-12 h-12 object-contain transition-all duration-300 group-hover:scale-110 group-hover:brightness-125"
        style={{
          filter: 'brightness(0) saturate(100%) invert(17%) sepia(100%) saturate(3533%) hue-rotate(348deg) brightness(85%) contrast(95%)'
        }}
      />
    </div>
  ),
  
  WheelAlignment: () => (
    <div className="w-12 h-12 flex items-center justify-center group">
      <img 
        src="/images/wheel-alignment-icon.png"
        alt="Wheel Alignment Service"
        className="w-12 h-12 object-contain transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
        style={{
          filter: 'brightness(0) saturate(100%) invert(48%) sepia(79%) saturate(2476%) hue-rotate(270deg) brightness(118%) contrast(119%)'
        }}
      />
    </div>
  ),
  
  TruckAccessories: () => (
    <div className="w-12 h-12 flex items-center justify-center group">
      <img 
        src="/images/lifted-truck.png"
        alt="Lifted Truck"
        className="w-12 h-12 object-contain transition-all duration-500 group-hover:translate-x-2 group-hover:scale-110"
        style={{
          filter: 'brightness(0) saturate(100%) invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg) brightness(118%) contrast(119%)'
        }}
      />
    </div>
  ),
  
  BatteryElectrical: () => (
    <div className="w-12 h-12 flex items-center justify-center group relative">
      <img 
        src="/images/battery-electrical-icon.png"
        alt="Battery and Electrical Service"
        className="w-12 h-12 object-contain transition-all duration-300 group-hover:scale-110 group-hover:animate-pulse"
        style={{
          filter: 'brightness(0) saturate(100%) invert(83%) sepia(69%) saturate(2613%) hue-rotate(2deg) brightness(103%) contrast(101%)'
        }}
      />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute top-1 left-1 w-1 h-1 bg-yellow-400 rounded-full animate-ping"></div>
        <div className="absolute top-2 right-2 w-1 h-1 bg-yellow-400 rounded-full animate-ping animation-delay-150"></div>
        <div className="absolute bottom-2 left-2 w-1 h-1 bg-yellow-400 rounded-full animate-ping animation-delay-300"></div>
      </div>
    </div>
  ),
  
  ACHeaterRepair: () => (
    <div className="w-12 h-12 flex items-center justify-center group">
      <img 
        src="/images/ac-heater-icon.png"
        alt="AC and Heater Service"
        className="w-12 h-12 object-contain transition-all duration-300 group-hover:scale-110 group-hover:animate-pulse"
        style={{
          filter: 'brightness(0) saturate(100%) invert(56%) sepia(98%) saturate(1945%) hue-rotate(158deg) brightness(103%) contrast(101%)'
        }}
      />
    </div>
  )
}
