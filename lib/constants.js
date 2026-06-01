export const site = {
  name: 'NyayaSutra — Legal Intelligence',
  phone: '+91 9971950371',
  rawPhone: '919971950371',
  email: 'nyayasutralegalintelligence@gmail.com',
  whatsapp: 'https://wa.me/919971950371',
  facebook: 'https://www.facebook.com/share/1CjgsCYHCE/',
  instagram: 'https://www.instagram.com/advtripathi334/?utm_source=qr&r=nametag',
  linkedin: 'https://www.linkedin.com/in/akhileshkumartripathi?utm_source=share_via&utm_content=profile&utm_medium=member_android',
  youtube: '',
  x: '',
  allahabadOffice: 'Front District Judge Block C, Room No. 28, Allahabad',
  delhiOffice: 'Sangam Vihar, Wazirabad Highway Road, Delhi - 110084',
  tagline: 'Supreme Court | High Courts | District Courts | Arbitration | International & Corporate Legal Support'
}
export const languages = [
  ['en','English'], ['hi','हिन्दी'], ['ur','اردو'], ['bn','বাংলা'], ['mr','मराठी'], ['ta','தமிழ்'], ['te','తెలుగు'], ['gu','ગુજરાતી'], ['pa','ਪੰਜਾਬੀ'], ['ar','العربية'], ['fr','Français'], ['de','Deutsch'], ['es','Español'], ['zh-CN','中文'], ['ja','日本語'], ['ru','Русский'], ['pt','Português'], ['it','Italiano'], ['ko','한국어'], ['ne','नेपाली']
]
export const practiceAreas = [
  ['Supreme Court Litigation','SLP, writs, appeals, review petitions, curative petitions, research and briefing assistance.'],
  ['High Court Practice','Writ petitions, bail matters, quashing petitions, appeals, service matters and public law.'],
  ['District Court Litigation','Criminal, civil, recovery, family, property, injunction and consumer matters.'],
  ['Criminal Law','FIR guidance, bail, anticipatory bail, trial defence, white collar crime and cyber crime.'],
  ['Civil Litigation','Property disputes, recovery suits, injunctions, partition, declaration and contract matters.'],
  ['Family & Matrimonial Law','Divorce, mutual divorce, maintenance, domestic violence, child custody and 498A matters.'],
  ['POCSO & Sensitive Matters','Sensitive criminal allegations, victim guidance, bail, trial support and documentation.'],
  ['Corporate & Commercial Law','Business agreements, startup support, compliance, employment contracts and commercial notices.'],
  ['Arbitration & ADR','Arbitration assistance, mediation support, settlement drafting and negotiation support.'],
  ['Constitutional Law','Fundamental rights, writ jurisdiction, constitutional challenges and administrative law.'],
  ['International Law & Global Research','Comparative legal systems, international human rights and international arbitration research.'],
  ['Cyber Law & Digital Matters','Online fraud, digital harassment, privacy issues and digital legal compliance.'],
  ['RTI & Human Rights','RTI drafting, human rights complaints, public grievance and legal awareness support.'],
  ['Consumer & Tribunal Matters','Consumer complaints, service disputes, tribunal matters and appeals support.'],
  ['Legal Research & Drafting','Legal notices, petitions, affidavits, bail applications, writs, SLPs and case briefing.']
]
export const courts = ['Supreme Court of India','Allahabad High Court','Delhi High Court','Karnataka High Court','Calcutta High Court','Madhya Pradesh High Court','Madras High Court','Chhattisgarh High Court','Kerala High Court','District Courts Across India']
export const starterBlogs = [
  {title:'Understanding Your Legal Rights', slug:'understanding-your-legal-rights', category:'Legal Awareness', excerpt:'A practical guide to basic legal awareness and responsible legal action.', content:'<h2>Legal Awareness</h2><p>Legal intelligence begins with clarity. Understanding rights, duties and procedure helps citizens take timely action.</p>'},
  {title:'Bail: Rights, Process and Important Legal Aspects', slug:'bail-rights-process', category:'Criminal Law', excerpt:'Key concepts related to bail, anticipatory bail and procedural safeguards.', content:'<h2>Bail Process</h2><p>Bail matters require urgency, documentation and strategic procedural understanding.</p>'},
  {title:'Consumer Protection Act — Key Provisions You Should Know', slug:'consumer-protection-key-provisions', category:'Consumer Law', excerpt:'How consumers can approach disputes, documentation and complaint filing.', content:'<h2>Consumer Rights</h2><p>Consumers have remedies against deficiency in service and unfair trade practices.</p>'}
]
export const starterCourses = [
  {title:'AIBE Exam Preparation', slug:'aibe-exam-preparation', description:'Core subject revision, Bare Act reading, MCQs, mock tests and exam strategy.', modules:['Legal Basics','Bare Act Reading','MCQ Practice','Mock Test','Revision Strategy']},
  {title:'Advocate-on-Record Exam Preparation', slug:'aor-exam-preparation', description:'Supreme Court procedure, drafting, filing basics, ethics and practice-oriented modules.', modules:['Supreme Court Procedure','Drafting & Filing','Legal Ethics','Written Practice','Case Based Learning']},
  {title:'Legal Drafting Course', slug:'legal-drafting-course', description:'Legal notices, affidavits, petitions, replies, applications and litigation documents.', modules:['Legal Notice','Bail Application','Petition Drafting','Affidavit Drafting','Real Practice Examples']},
  {title:'Legal Research Course', slug:'legal-research-course', description:'Judgment reading, case analysis, research methodology, citation and databases.', modules:['Judgment Analysis','Research Methodology','Case Law Reading','Citation Learning','Research Assignment']},
  {title:'Internship Readiness Course', slug:'internship-readiness-course', description:'Court etiquette, file handling, office discipline, communication and litigation basics.', modules:['Court Etiquette','File Handling','Office Discipline','Professional Communication','Internship Checklist']}
]
export function waLink(message){ return `https://wa.me/${site.rawPhone}?text=${encodeURIComponent(message)}` }
