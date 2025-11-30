import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { 
  Heart, Cat, ShieldPlus, Utensils, Gift, ArrowRight, CheckCircle2, 
  MapPin, Phone, Mail, Stethoscope, Home, AlertCircle, PieChart, 
  TrendingUp, Users, Calendar, X, ExternalLink, QrCode, School, Info,
  MessageCircle, Loader2, Menu
} from 'lucide-react';

// --- Components ---

const Navbar = ({ onDonateClick, onVolunteerClick }: { onDonateClick: () => void, onVolunteerClick: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLink = ({ href, children, onClick }: { href?: string, children?: React.ReactNode, onClick?: () => void }) => (
    <a 
      href={href} 
      onClick={(e) => {
        if (onClick) onClick();
        setIsMobileMenuOpen(false);
      }}
      className={`font-medium transition-colors block py-2 md:py-0 ${isScrolled || isMobileMenuOpen ? 'text-slate-700 hover:text-brand-500' : 'md:text-slate-800 text-slate-700 md:hover:text-brand-600'}`}
    >
      {children}
    </a>
  );

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen ? 'bg-white shadow-md' : 'bg-white/90 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none'} py-3`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center space-x-2 md:space-x-3 z-50">
            <div className="bg-medical-600 p-1.5 rounded-lg shadow-sm shrink-0">
              <School className="text-white w-5 h-5 md:w-6 md:h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-base md:text-lg font-bold tracking-tight leading-none text-slate-900">
                齐齐哈尔医学院
              </span>
              <span className="text-xs font-medium tracking-wide text-brand-600">
                流浪猫救济计划
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#about">关于计划</NavLink>
            <NavLink href="#cats">校园猫咪</NavLink>
            <NavLink href="#impact">资金去向</NavLink>
            <button onClick={onVolunteerClick} className={`font-medium hover:text-brand-500 transition-colors ${isScrolled ? 'text-slate-600' : 'text-slate-800'}`}>成为志愿者</button>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
             <button 
              onClick={onDonateClick}
              className="bg-brand-500 hover:bg-brand-600 text-white px-4 py-2 md:px-6 md:py-2 rounded-full font-bold shadow-lg shadow-brand-500/30 transition-all hover:scale-105 active:scale-95 flex items-center gap-2 text-sm md:text-base"
            >
              <Heart className="w-4 h-4 fill-current" />
              <span>捐助</span>
            </button>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-slate-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-xl animate-fade-in-down">
            <div className="px-4 py-6 space-y-4 flex flex-col">
              <NavLink href="#about">关于计划</NavLink>
              <NavLink href="#cats">校园猫咪</NavLink>
              <NavLink href="#impact">资金去向</NavLink>
              <button 
                onClick={() => { onVolunteerClick(); setIsMobileMenuOpen(false); }} 
                className="text-left font-medium text-slate-700 py-2"
              >
                成为志愿者
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const Hero = ({ onDonateClick }: { onDonateClick: () => void }) => {
  return (
    <div className="relative pt-28 pb-12 lg:pt-48 lg:pb-32 overflow-hidden min-h-[600px] flex flex-col justify-center">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://s41.ax1x.com/2025/11/30/pZVcVtx.jpg" 
          alt="Cat Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/90 via-slate-50/60 to-slate-50"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-medical-50 text-medical-700 border border-medical-100 font-medium text-xs md:text-sm mb-6 animate-fade-in-up shadow-sm">
          <ShieldPlus className="w-3 h-3 md:w-4 md:h-4 mr-2" />
          齐齐哈尔医学院学生社团联合会认证项目
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-4 md:mb-6 leading-tight">
          弘扬医者仁心<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-medical-600">守护校园小生命</span>
        </h1>
        <p className="mt-2 text-base md:text-xl text-slate-600 max-w-xl mx-auto mb-8 leading-relaxed px-2">
          这里是齐齐哈尔医学院流浪动物关爱中心。<br className="md:hidden"/>寒冬将至，我们致力于为校园内的流浪猫提供食物、绝育与医疗援助。
        </p>
        <div className="flex flex-col w-full sm:w-auto sm:flex-row justify-center gap-3 px-4 sm:px-0">
          <button 
            onClick={onDonateClick}
            className="w-full sm:w-auto px-8 py-3.5 bg-brand-600 text-white text-lg font-bold rounded-xl shadow-xl shadow-brand-500/20 hover:bg-brand-700 transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
          >
            <Heart className="w-5 h-5" />
            伸出援手
          </button>
          <a 
            href="#about"
            className="w-full sm:w-auto px-8 py-3.5 bg-white text-slate-700 text-lg font-bold rounded-xl border border-slate-200 shadow-sm hover:bg-slate-50 transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
          >
            了解更多
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
        
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 w-full max-w-4xl mx-auto border-t border-slate-200 pt-8">
          {[
            { label: '齐医校园猫咪', value: '120+', icon: Cat },
            { label: 'TNR绝育完成', value: '85', icon: Stethoscope },
            { label: '医学生志愿者', value: '500+', icon: Users },
            { label: '成功领养家庭', value: '45', icon: Home },
          ].map((stat, idx) => (
            <div key={idx} className="text-center group cursor-default p-2 rounded-lg hover:bg-white/50 transition-colors">
              <div className="flex justify-center mb-1 text-medical-500 group-hover:scale-110 transition-transform">
                <stat.icon className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-slate-900">{stat.value}</div>
              <div className="text-xs md:text-sm text-slate-500 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const AboutSection = () => (
  <section id="about" className="py-12 md:py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="relative w-full">
          <div className="absolute -inset-4 bg-medical-100 rounded-3xl transform -rotate-3 hidden md:block"></div>
          <img 
            src="https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
            alt="Students feeding cats" 
            className="relative rounded-2xl shadow-lg w-full object-cover h-64 md:h-[500px]"
          />
          <div className="absolute -bottom-6 left-4 right-4 md:bottom-6 md:left-6 md:right-6 bg-white/95 backdrop-blur-sm p-4 md:p-6 rounded-xl shadow-lg border border-slate-100">
            <div className="flex items-start gap-4">
              <div className="p-2 md:p-3 bg-brand-100 rounded-full text-brand-600 shrink-0">
                <Utensils className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-base md:text-lg">定点投喂与观察</h4>
                <p className="text-slate-600 text-xs md:text-sm mt-1">我们在齐齐哈尔医学院内（包括图书馆后、食堂旁）设有5个固定投喂点。</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 md:mt-0">
          <h2 className="text-brand-600 font-bold tracking-wide uppercase text-xs md:text-sm mb-2">关于我们</h2>
          <h3 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4 md:mb-6">珍视生命，从校园开始</h3>
          <p className="text-slate-600 mb-6 text-base md:text-lg leading-relaxed">
            齐齐哈尔医学院流浪猫救济计划是由在校医学生自发组织的公益项目。作为未来的医务工作者，我们深知生命的可贵。我们致力于通过科学、人道的方式管理校园流浪动物。
          </p>
          <div className="space-y-4 mb-8">
            {[
              { title: "TNR 科学绝育", desc: "严格执行“诱捕、绝育、放归”流程，控制校园猫咪数量增长。" },
              { title: "专业医疗救助", desc: "依托兽医资源，为生病、受伤的猫咪提供专业治疗。" },
              { title: "生命教育宣传", desc: "在校内开展生命教育活动，倡导“领养代替购买”。" }
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="mt-1 shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-medical-500" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm md:text-base">{item.title}</h4>
                  <p className="text-slate-600 text-xs md:text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ImpactSection = () => {
  return (
    <section id="impact" className="py-12 md:py-20 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-medical-500/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-brand-400 font-bold tracking-wide uppercase text-xs md:text-sm mb-2">透明公开</h2>
          <h3 className="text-2xl md:text-4xl font-bold mb-4">每一分善款的去向</h3>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base">我们坚持财务公开透明，定期在校内公告栏及公众号公示收支明细。</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Urgent Goal */}
          <div className="bg-slate-800/50 p-6 md:p-8 rounded-3xl border border-slate-700 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-2">
              <div className="flex items-center gap-3">
                <div className="bg-red-500/20 p-2 rounded-lg">
                  <TrendingUp className="text-red-400 w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-base md:text-lg">齐医冬季保暖特别行动</h4>
                  <p className="text-slate-400 text-xs">截止日期: 2026-1-30</p>
                </div>
              </div>
              <span className="bg-brand-600 text-white text-xs px-3 py-1 rounded-full font-bold self-start md:self-auto">进行中</span>
            </div>
            
            <h5 className="text-xl md:text-2xl font-bold mb-2">猫窝加固与冬粮储备</h5>
            <p className="text-slate-400 mb-6 text-sm">齐齐哈尔的冬天寒冷漫长，我们需要为校园内的30个猫窝进行防风保暖升级，并储备足够的过冬高热量猫粮。</p>
            
            <div className="mb-2 flex justify-between text-sm font-medium">
              <span>已筹集 ¥3,450</span>
              <span className="text-slate-400">目标 ¥5,000</span>
            </div>
            <div className="h-3 md:h-4 bg-slate-700 rounded-full overflow-hidden mb-8">
              <div className="h-full bg-gradient-to-r from-brand-500 to-red-500 w-[69%] relative">
                <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 md:gap-4 border-t border-slate-700 pt-6">
               <div className="text-center">
                 <div className="text-lg md:text-2xl font-bold">30</div>
                 <div className="text-[10px] md:text-xs text-slate-400 mt-1">计划升级猫窝</div>
               </div>
               <div className="text-center border-l border-slate-700">
                 <div className="text-lg md:text-2xl font-bold">200kg</div>
                 <div className="text-[10px] md:text-xs text-slate-400 mt-1">过冬猫粮</div>
               </div>
               <div className="text-center border-l border-slate-700">
                 <div className="text-lg md:text-2xl font-bold">15</div>
                 <div className="text-[10px] md:text-xs text-slate-400 mt-1">防冻水碗</div>
               </div>
            </div>
          </div>

          {/* General Stats */}
          <div className="space-y-4 md:space-y-6">
            <h4 className="font-bold text-lg md:text-xl mb-2 md:mb-4 flex items-center gap-2">
              <PieChart className="w-5 h-5 text-medical-400" />
              年度资金分配比例
            </h4>
            
            {[
              { label: "绝育手术 (TNR)", percent: "45%", color: "bg-blue-500", desc: "控制种群数量最有效的手段" },
              { label: "医疗救治", percent: "30%", color: "bg-red-500", desc: "急救、口炎治疗、疫苗接种" },
              { label: "日常粮罐", percent: "20%", color: "bg-brand-500", desc: "维持基本的生命能量需求" },
              { label: "设施维护", percent: "5%", color: "bg-emerald-500", desc: "猫窝、抓板、水碗更新" },
            ].map((item, idx) => (
              <div key={idx} className="group">
                <div className="flex justify-between text-xs md:text-sm mb-1">
                  <span className="font-medium text-slate-200">{item.label}</span>
                  <span className="font-bold text-white">{item.percent}</span>
                </div>
                <div className="h-1.5 md:h-2 bg-slate-700 rounded-full overflow-hidden mb-1">
                  <div className={`h-full ${item.color} w-[${item.percent.replace('%', '')}%] transition-all duration-1000 group-hover:opacity-80`} style={{width: item.percent}}></div>
                </div>
                <p className="text-[10px] md:text-xs text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const CatsGallery = ({ onDonateClick }: { onDonateClick: () => void }) => {
  const cats = [
    { name: "大黄", status: "待领养", tag: "亲人", img: "https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "图书馆门口的常客，喜欢晒太阳和被挠下巴。如果你手里有火腿肠，它会一直跟着你直到得手为止。" },
    { name: "奥利奥", status: "需医疗", tag: "口炎治疗中", img: "https://images.unsplash.com/photo-1501820488136-72669149e0d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "目前正在接受口炎治疗，需要特殊的软食罐头。性格比较胆小，但在志愿者姐姐面前会撒娇。" },
    { name: "小白", status: "已绝育", tag: "高冷", img: "https://images.unsplash.com/photo-1513245543132-31f507417b26?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "出没于三号楼附近，警惕性高，但会等志愿者喂饭。它有一双异瞳，非常漂亮，是校园里的颜值担当。" },
    { name: "煤球", status: "待领养", tag: "活泼", img: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "非常粘人，如果你蹲下它会立刻跳到你腿上。不仅不怕人，还经常试图溜进教室听课。" },
  ];

  return (
    <section id="cats" className="py-12 md:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-2 md:mb-4">认识我们的校园伙伴</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base">每一只猫都有自己的名字和故事。您的捐助将直接改变它们的命运。</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {cats.map((cat, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col h-full">
              <div className="h-56 md:h-64 overflow-hidden relative">
                <img 
                  src={cat.img} 
                  alt={cat.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm
                    ${cat.status === '需医疗' ? 'bg-red-500' : 'bg-medical-500'}`}>
                    {cat.status}
                  </span>
                </div>
              </div>
              <div className="p-5 md:p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg md:text-xl font-bold text-slate-900">{cat.name}</h3>
                  <span className="text-xs font-medium px-2 py-1 bg-slate-100 text-slate-600 rounded-md">{cat.tag}</span>
                </div>
                <p className="text-slate-600 text-xs md:text-sm mb-6 line-clamp-3 flex-1">{cat.desc}</p>
                <button 
                  onClick={onDonateClick}
                  className="w-full py-2 rounded-lg border border-brand-200 text-brand-600 font-medium hover:bg-brand-50 transition-colors flex items-center justify-center gap-2 group-hover:bg-brand-500 group-hover:text-white group-hover:border-brand-500 text-sm"
                >
                  <Gift className="w-4 h-4" />
                  云抚养{cat.name}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const DonorTicker = () => {
  const [position, setPosition] = useState(0);
  const donors = [
    { name: "张*同学", amount: 20, time: "5分钟前" },
    { name: "李*医生", amount: 100, time: "12分钟前" },
    { name: "匿名好心人", amount: 50, time: "25分钟前" },
    { name: "22级护理系王*", amount: 10, time: "30分钟前" },
    { name: "赵*老师", amount: 200, time: "1小时前" },
    { name: "爱猫小分队", amount: 66, time: "2小时前" },
  ];

  // Simple auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => (prev + 1) % donors.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [donors.length]);

  return (
    <div className="bg-white/10 rounded-xl p-4 mt-6 backdrop-blur-sm border border-white/10">
      <h4 className="text-brand-100 text-xs font-bold uppercase mb-3 flex items-center gap-2">
        <Heart className="w-3 h-3 text-red-400 fill-current animate-pulse" />
        齐医爱心榜
      </h4>
      <div className="space-y-3 relative h-32 overflow-hidden mask-gradient-b">
         {donors.map((donor, idx) => {
           // Calculate opacity and transform based on position
           let offset = idx - position;
           if (offset < 0) offset += donors.length;
           
           // Only show first 3 items for simplicity in this visualization logic
           if (offset > 2) return null;

           return (
             <div 
              key={idx} 
              className="flex items-center justify-between text-sm transition-all duration-500 absolute w-full"
              style={{ top: `${offset * 2.5}rem`, opacity: 1 - offset * 0.3, transform: `scale(${1 - offset * 0.05})` }}
             >
               <div className="flex items-center gap-2">
                 <div className="w-6 h-6 rounded-full bg-brand-200/20 text-brand-100 flex items-center justify-center text-xs">
                   {donor.name.charAt(0)}
                 </div>
                 <span className="text-white font-medium">{donor.name}</span>
               </div>
               <span className="text-brand-200">捐赠 ¥{donor.amount}</span>
             </div>
           );
         })}
      </div>
    </div>
  );
};

const DonationForm = () => {
  const [amount, setAmount] = useState<number | string>(50);
  const [customAmount, setCustomAmount] = useState('');
  const [showQR, setShowQR] = useState(false);
  const [modalStep, setModalStep] = useState<'qr' | 'reviewing'>('qr');
  const [countdown, setCountdown] = useState(0);

  const presets = [
    { value: 10, label: '一顿加餐', desc: '美味罐头' },
    { value: 20, label: '体外驱虫', desc: '一支药剂' },
    { value: 50, label: '疫苗接种', desc: '猫三联一针' },
    { value: 100, label: '绝育基金', desc: '助医基金' },
  ];

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    setModalStep('qr');
    setShowQR(true);
    setCountdown(5); // Reset countdown to 5 seconds
  };

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (showQR && modalStep === 'qr' && countdown > 0) {
      timer = setTimeout(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [showQR, modalStep, countdown]);

  const finalAmount = amount === 'custom' ? Number(customAmount) : amount;

  return (
    <section id="donate" className="py-12 md:py-20 bg-white relative overflow-hidden">
       {/* Background decoration */}
       <div className="absolute top-0 left-0 w-full h-full bg-brand-50/50 -z-10"></div>
       <div className="absolute -right-20 top-20 w-96 h-96 bg-brand-200/30 rounded-full blur-3xl"></div>
       <div className="absolute -left-20 bottom-20 w-96 h-96 bg-medical-200/30 rounded-full blur-3xl"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 flex flex-col md:grid md:grid-cols-5">
          {/* Info Side */}
          <div className="md:col-span-2 bg-slate-900 text-white p-6 md:p-10 flex flex-col justify-between relative overflow-hidden order-first">
            <div className="absolute inset-0 bg-brand-600 opacity-90"></div>
            <img src="https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50" />
            
            <div className="relative z-10">
              <Heart className="w-8 h-8 md:w-10 md:h-10 text-white mb-4 md:mb-6" />
              <h3 className="text-xl md:text-2xl font-bold mb-2">您的爱心<br/>不仅是捐赠</h3>
              <p className="text-brand-100 text-sm">更是给它们活下去的希望。</p>
              
              <DonorTicker />
            </div>
            
            <div className="relative z-10 mt-6 hidden md:block">
              <div className="flex items-center gap-2 mb-2 text-sm font-medium text-brand-100">
                <ShieldPlus className="w-4 h-4" />
                资金公开透明
              </div>
              <div className="text-xs text-brand-200 leading-relaxed opacity-80">
                所有款项由齐齐哈尔医学院红十字志愿队监管。
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="md:col-span-3 p-6 md:p-10">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 md:mb-6">选择捐赠金额</h3>
            <form onSubmit={handleDonate}>
              <div className="grid grid-cols-2 gap-3 md:gap-4 mb-6">
                {presets.map((preset) => (
                  <button
                    key={preset.value}
                    type="button"
                    onClick={() => { setAmount(preset.value); setCustomAmount(''); }}
                    className={`relative p-3 md:p-4 rounded-xl border-2 transition-all text-left group
                      ${amount === preset.value 
                        ? 'border-brand-500 bg-brand-50' 
                        : 'border-slate-100 hover:border-brand-200 bg-white'}`}
                  >
                    <div className={`font-bold text-base md:text-lg mb-1 ${amount === preset.value ? 'text-brand-700' : 'text-slate-800'}`}>
                      ¥{preset.value}
                    </div>
                    <div className="text-xs text-slate-500 group-hover:text-brand-600">{preset.desc}</div>
                    {amount === preset.value && (
                      <div className="absolute top-2 right-2 md:top-3 md:right-3 text-brand-500">
                        <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5" />
                      </div>
                    )}
                  </button>
                ))}
              </div>

              <div className="mb-8">
                <label className="block text-sm font-medium text-slate-700 mb-2">或输入自定义金额</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">¥</span>
                  <input
                    type="number"
                    min="1"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setAmount('custom');
                    }}
                    onFocus={() => setAmount('custom')}
                    className={`w-full pl-10 pr-4 py-3 rounded-xl border-2 focus:ring-0 outline-none transition-all text-lg
                      ${amount === 'custom' 
                        ? 'border-brand-500 bg-brand-50 text-brand-900' 
                        : 'border-slate-200 focus:border-brand-300'}`}
                    placeholder="输入金额"
                  />
                </div>
              </div>

              <button 
                type="submit"
                disabled={amount === 'custom' && !customAmount}
                className="w-full bg-brand-600 text-white py-3.5 md:py-4 rounded-xl font-bold text-lg shadow-lg shadow-brand-500/30 hover:bg-brand-700 transition-all hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex justify-center items-center gap-2"
              >
                <QrCode className="w-5 h-5" />
                确认捐赠 {finalAmount ? `¥${finalAmount}` : ''}
              </button>
              <p className="text-center text-[10px] md:text-xs text-slate-400 mt-4 flex justify-center items-center gap-1">
                <ShieldPlus className="w-3 h-3" />
                资金由齐齐哈尔医学院学生社团联合会全程监管
              </p>
            </form>
          </div>
        </div>
      </div>

      {showQR && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl w-full max-w-sm shadow-2xl overflow-hidden relative animate-scale-in flex flex-col items-center max-h-[90vh] overflow-y-auto">
             <button 
               onClick={() => setShowQR(false)}
               className="absolute top-2 right-2 z-10 p-2 text-slate-400 hover:text-slate-600 rounded-full transition-colors bg-white/80"
             >
               <X className="w-6 h-6" />
             </button>

             {modalStep === 'qr' ? (
               <div className="p-5 md:p-6 w-full flex flex-col items-center">
                  <div className="mb-4 text-center">
                     <h3 className="text-lg md:text-xl font-bold text-slate-900">感谢您的爱心捐赠</h3>
                     <p className="text-brand-600 font-medium text-sm md:text-base">齐齐哈尔医学院流浪猫救济计划</p>
                  </div>
                  
                  <div className="w-full bg-slate-50 rounded-xl p-2 mb-4 border border-slate-100">
                    <img 
                      src="https://s41.ax1x.com/2025/11/30/pZV6BY6.jpg" 
                      alt="捐赠二维码" 
                      className="w-full h-auto rounded-lg object-contain"
                    />
                  </div>

                  <div className="bg-orange-50 border border-orange-100 rounded-lg p-3 w-full mb-4">
                    <div className="flex gap-2">
                      <AlertCircle className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                      <div className="text-xs text-orange-800">
                        <span className="font-bold block mb-1">温馨提示：</span>
                        请备注 <strong>姓名+专业/部门</strong> (如：张三 22级临本) 以便我们进行财务公示。
                      </div>
                    </div>
                  </div>

                  <button 
                    onClick={() => setModalStep('reviewing')}
                    disabled={countdown > 0}
                    className={`w-full py-3 rounded-xl font-bold transition-all shadow-lg text-sm md:text-base
                      ${countdown > 0 
                        ? 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none' 
                        : 'bg-brand-600 text-white hover:bg-brand-700 shadow-brand-500/20'}`}
                  >
                    {countdown > 0 ? `请完成支付 (${countdown}s)` : '我已完成支付'}
                  </button>
               </div>
             ) : (
               <div className="p-8 w-full flex flex-col items-center text-center py-12">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
                    <Loader2 className="w-8 h-8 md:w-10 md:h-10 text-green-500 animate-spin" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">订单审核中</h3>
                  <p className="text-slate-500 text-sm mb-8 leading-relaxed">
                    感谢您的慷慨解囊！<br/>
                    财务志愿者正在后台核对入账信息。<br/>
                    审核通过后，您的名字将出现在<br/>
                    <span className="text-brand-600 font-bold">爱心公示榜</span>上。
                  </p>
                  <button 
                    onClick={() => setShowQR(false)}
                    className="w-full bg-slate-100 text-slate-700 py-3 rounded-xl font-bold hover:bg-slate-200 transition-colors"
                  >
                    我知道了
                  </button>
               </div>
             )}
          </div>
        </div>
      )}
    </section>
  );
};

const VolunteerModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
      <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden animate-fade-in-up flex flex-col max-h-[90vh]">
        <div className="bg-medical-600 p-4 md:p-6 flex justify-between items-center text-white shrink-0">
          <h3 className="text-lg md:text-xl font-bold flex items-center gap-2">
            <Users className="w-5 h-5" />
            加入志愿者团队
          </h3>
          <button onClick={onClose} className="hover:bg-medical-700 p-1 rounded-full transition-colors">
            <X className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>
        
        <div className="p-6 md:p-8 overflow-y-auto">
          <p className="text-slate-600 mb-6 text-sm">
            欢迎齐齐哈尔医学院的同学们加入！我们需要充满爱心和责任感的你，参与校园流浪猫的日常喂食、TNR协助及宣传工作。
          </p>
          
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("申请已提交！我们会尽快联系您。"); onClose(); }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">姓名</label>
                <input type="text" required className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-medical-500 focus:border-transparent outline-none" placeholder="你的名字" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">年级/专业</label>
                <input type="text" required className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-medical-500 focus:border-transparent outline-none" placeholder="例: 22级临本" />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">联系方式 (手机/微信)</label>
              <input type="text" required className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-medical-500 focus:border-transparent outline-none" />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">申请理由 / 特长</label>
              <textarea rows={3} className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-medical-500 focus:border-transparent outline-none" placeholder="简单说说你想做什么..."></textarea>
            </div>
            
            <button type="submit" className="w-full bg-slate-900 text-white py-3 rounded-lg font-bold hover:bg-slate-800 transition-colors mt-2">
              提交申请
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const Footer = ({ onVolunteerClick }: { onVolunteerClick: () => void }) => (
  <footer className="bg-slate-900 text-slate-300 py-8 md:py-12 border-t border-slate-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center space-x-2 mb-4">
            <School className="text-medical-500 w-6 h-6" />
            <span className="text-lg md:text-xl font-bold text-white">齐齐哈尔医学院 | 流浪猫救济计划</span>
          </div>
          <p className="text-slate-400 text-sm max-w-sm leading-relaxed mb-6">
            每一份关爱都是力量，每一次转发都是希望。践行医学生誓言，尊重每一个生命。
          </p>
          <div className="flex space-x-4">
            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-600 transition-colors cursor-pointer text-white">
              <Phone className="w-4 h-4" />
            </div>
            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-600 transition-colors cursor-pointer text-white">
              <Mail className="w-4 h-4" />
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-4">快速链接</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#about" className="hover:text-brand-400 transition-colors block py-1">关于我们</a></li>
            <li><a href="#cats" className="hover:text-brand-400 transition-colors block py-1">猫咪档案</a></li>
            <li><a href="#impact" className="hover:text-brand-400 transition-colors block py-1">财务公示</a></li>
            <li><button onClick={onVolunteerClick} className="hover:text-brand-400 transition-colors text-left block py-1">加入志愿者</button></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-4">联系我们</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-brand-500 shrink-0" />
              <span>黑龙江省齐齐哈尔市建华区中华西路168号</span>
            </li>
            <li className="flex items-start gap-3">
              <School className="w-5 h-5 text-brand-500 shrink-0" />
              <span>齐齐哈尔医学院团委社团部</span>
            </li>
            <li className="flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-brand-500 shrink-0" />
              <span>校园救助热线: 138-xxxx-xxxx</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800 mt-8 md:mt-12 pt-8 text-center text-xs text-slate-500 px-4">
        <p>&copy; {new Date().getFullYear()} 齐齐哈尔医学院流浪猫救济计划志愿团队. All rights reserved.</p>
        <p className="mt-2">本项目为非营利性公益活动，所有解释权归齐齐哈尔医学院学生社团所有</p>
      </div>
    </div>
  </footer>
);

const App = () => {
  const [isVolunteerModalOpen, setIsVolunteerModalOpen] = useState(false);

  const scrollToDonate = () => {
    const element = document.getElementById('donate');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-brand-200 selection:text-brand-900 pb-20 md:pb-0">
      <Navbar onDonateClick={scrollToDonate} onVolunteerClick={() => setIsVolunteerModalOpen(true)} />
      <Hero onDonateClick={scrollToDonate} />
      <AboutSection />
      <CatsGallery onDonateClick={scrollToDonate} />
      <ImpactSection />
      <DonationForm />
      <Footer onVolunteerClick={() => setIsVolunteerModalOpen(true)} />
      <VolunteerModal isOpen={isVolunteerModalOpen} onClose={() => setIsVolunteerModalOpen(false)} />
    </div>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(<App />);