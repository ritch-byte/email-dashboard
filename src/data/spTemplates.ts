export interface TemplateVariant {
  to: string
  cc: string
  subject: string
  body: string
  label: string
}

export interface PartnerTemplate {
  partner: string
  variants: TemplateVariant[]
}

export const SP_TEMPLATES: PartnerTemplate[] = [
  {
    partner: 'ACQUIRE',
    variants: [
      {
        to: 'rajat.sehgal@acquire.ai',
        cc: 'bdr-team@outsourceaccelerator.com',
        subject: "(OL) Meeting Confirmation: Acquire Intelligence <> [Lead's First and Last name] - Date of Appointment",
        label: 'Rajat Sehgal',
        body: `Hi {{ contact.firstname }} and Rajat,

I'm pleased to introduce you both, as I believe there's a valuable opportunity for collaboration between your companies. Below are the details of your upcoming meeting:

Date:
Time:
Meeting Location/Link:

Rajat, {{ contact.firstname }} is the [Job Title] at [Company]. They are interested in exploring {{ contact.quote_role_to_outsource }}.

{{ contact.firstname }}, Acquire Intelligence is an award-winning, global business outsourcer with 9,500+ staff and 20 years' experience in delivering intelligent contact center and back-office functions for global businesses across many industries including telecommunications, banking and financial services, insurance, media, education and retail. Acquire is an entrepreneurial business that is highly experienced in working with their partners to solve real-life problems quickly. A genuine partnership approach is at the heart of what they do. Their teams are highly proficient in exceeding expectations, especially in situations where in-house teams may be typically challenged with the business processes of "big business".

[Lead's First Name], we are excited for you to attend the Discovery Calls - and have created a [valuable guide to outsourcing](https://drive.google.com/file/d/1d6F-DQKVM65h3KE5CnQKJqaee-FMxUuo/view?usp=sharing) and an [outsourcing whitepaper](https://drive.google.com/file/d/1itLCO15HxDEUC8gK4FXpGQ6WmB_ZeW5b/view?usp=sharing), which will help you on this call. The handy guide includes some key questions you might want to ask the outsourcing experts.

I will leave you to speak with one another, but feel free to loop us in should you need anything from us. I hope the discussion goes well. Thank you and have a great week ahead!

Best regards,`,
      },
      {
        to: 'kirtna.charavda@acquirebpo.com',
        cc: 'bdr-team@outsourceaccelerator.com',
        subject: "(OL) Meeting Confirmation: Acquire Intelligence <> [Lead's First and Last name] - Date of Appointment",
        label: 'Kirtna Charavda',
        body: `Hi {{ contact.firstname }} and Kirtna,

I'm pleased to introduce you both, as I believe there's a valuable opportunity for collaboration between your companies. Below are the details of your upcoming meeting:

Date:
Time:
Meeting Location/Link:

Kirtna, {{ contact.firstname }} is the [Job Title] at [Company]. They are interested in exploring {{ contact.quote_role_to_outsource }}.

{{ contact.firstname }}, Acquire Intelligence is an award-winning, global business outsourcer with 9,500+ staff and 20 years' experience in delivering intelligent contact center and back-office functions for global businesses across many industries including telecommunications, banking and financial services, insurance, media, education and retail. Acquire is an entrepreneurial business that is highly experienced in working with their partners to solve real-life problems quickly. A genuine partnership approach is at the heart of what they do. Their teams are highly proficient in exceeding expectations, especially in situations where in-house teams may be typically challenged with the business processes of "big business".

[Lead's First Name], we are excited for you to attend the Discovery Calls - and have created a [valuable guide to outsourcing](https://drive.google.com/file/d/1d6F-DQKVM65h3KE5CnQKJqaee-FMxUuo/view?usp=sharing) and an [outsourcing whitepaper](https://drive.google.com/file/d/1itLCO15HxDEUC8gK4FXpGQ6WmB_ZeW5b/view?usp=sharing), which will help you on this call. The handy guide includes some key questions you might want to ask the outsourcing experts.

I will leave you to speak with one another, but feel free to loop us in should you need anything from us. I hope the discussion goes well. Thank you and have a great week ahead!

Best regards,`,
      },
    ],
  },
  {
    partner: 'ARCANYS',
    variants: [
      {
        to: 'fred@arcanys.com',
        cc: '',
        subject: "Meeting Confirmation: Arcanys <> [Lead's First and Last name] - Date of Appointment",
        label: 'Default',
        body: `Hi {{ contact.firstname }} and Arcanys Team,

I'm pleased to formally connect you both. This meeting represents a strategic opportunity, and I'm confident Arcanys' proven expertise aligns perfectly with your goals for {{ contact.quote_role_to_outsource }}.

To ensure you have everything locked in, here are the details for your upcoming discussion:

Date:
Time:
Meeting Location/Link:

[Arcanys](https://www.arcanys.com/about) Team, {{ contact.firstname }} is the [Job Title] at [Company]. They are interested in exploring strategic solutions for {{ contact.quote_role_to_outsource }}.

{{ contact.firstname }}, Arcanys is a 360+ people strong Swiss-founded software development and team augmentation company based in the Philippines, helping tech-enabled companies scale with dedicated full-time developers, QA, UX/UI, cloud support, AI/data specialists, and CTO-on-demand services.

Crucial Next Step to Maximize Your Time:
{{ contact.firstname }}, we want to make sure your Discovery Call is as productive as possible. We've attached a [valuable guide to outsourcing](https://drive.google.com/file/d/1d6F-DQKVM65h3KE5CnQKJqaee-FMxUuo/view?usp=sharing) and an [outsourcing whitepaper](https://drive.google.com/file/d/1itLCO15HxDEUC8gK4FXpGQ6WmB_ZeW5b/view?usp=sharing), which includes key, data-driven questions that will help you quickly dive into the strategic planning Arcanys offers.

I will leave you to connect, but feel free to loop us in if you need anything at all. Thank you and have a great week ahead!

Best regards,`,
      },
    ],
  },
  {
    partner: 'AZENDO',
    variants: [
      {
        to: 'jm@azendo.co',
        cc: '',
        subject: "Meeting Confirmation: Azendo <> [Lead's First and Last name] - Date of Appointment",
        label: 'Default',
        body: `Hi {{ contact.firstname }} and Azendo Team,

I'm pleased to formally connect you both. This meeting represents a strategic opportunity, and I'm confident Azendo's proven expertise aligns perfectly with your goals for {{ contact.quote_role_to_outsource }}.

Date:
Time:
Meeting Location/Link:

[Azendo](https://azendo.co/about-azendo/) Team, {{ contact.firstname }} is the [Job Title] at [Company]. They are interested in exploring strategic solutions for {{ contact.quote_role_to_outsource }}.

{{ contact.firstname }}, Azendo is a Danish-owned offshore staffing partner with over 14 years of experience and a growing team of more than 100 professionals based in Thailand, and recently, in the Philippines.

Crucial Next Step to Maximize Your Time:
{{ contact.firstname }}, we've attached a [valuable guide to outsourcing](https://drive.google.com/file/d/1d6F-DQKVM65h3KE5CnQKJqaee-FMxUuo/view?usp=sharing) and an [outsourcing whitepaper](https://drive.google.com/file/d/1itLCO15HxDEUC8gK4FXpGQ6WmB_ZeW5b/view?usp=sharing).

I will leave you to connect. Thank you and have a great week ahead!

Best regards,`,
      },
    ],
  },
  {
    partner: 'CALLMAX SOLUTIONS',
    variants: [
      {
        to: 'c.mojica@callmaxsolutions.com,Jeremiah@callmaxsolutions.com',
        cc: '',
        subject: "Meeting Confirmation: Callmax <> [Lead's First and Last name] - Date of Appointment",
        label: 'Default',
        body: `Hi {{ contact.firstname }} and Callmax Team,

I'm pleased to formally connect you both. This meeting represents a strategic opportunity, and I'm confident Callmax's proven expertise aligns perfectly with your goals for {{ contact.quote_role_to_outsource }}.

Date:
Time:
Meeting Location/Link:

[Callmax](https://www.vaplatinum.com.au/ph/about-us) Team, {{ contact.firstname }} is the [Job Title] at [Company]. They are interested in exploring strategic solutions for {{ contact.quote_role_to_outsource }}.

{{ contact.firstname }}, Callmax is an innovative BPO services provider headquartered in New York. This firm takes pride in its customer-centric approach in providing committed call center solutions for businesses of any size.

Crucial Next Step to Maximize Your Time:
{{ contact.firstname }}, we've attached a [valuable guide to outsourcing](https://drive.google.com/file/d/1d6F-DQKVM65h3KE5CnQKJqaee-FMxUuo/view?usp=sharing) and an [outsourcing whitepaper](https://drive.google.com/file/d/1itLCO15HxDEUC8gK4FXpGQ6WmB_ZeW5b/view?usp=sharing).

I will leave you to connect. Thank you and have a great week ahead!

Best regards,`,
      },
    ],
  },
  {
    partner: 'CC.TALENT',
    variants: [
      {
        to: 'madonna.mendoza@cctalent.global',
        cc: '',
        subject: "Meeting Confirmation: CC.Talent Group <> [Lead's First and Last name] - Date of Appointment",
        label: 'Default',
        body: `Hi {{ contact.firstname }} and CC.Talent Group Team,

I'm pleased to formally connect you both. This meeting represents a strategic opportunity, and I'm confident CC.Talent Group's proven expertise aligns perfectly with your goals for {{ contact.quote_role_to_outsource }}.

Date:
Time:
Meeting Location/Link:

[CC.Talent Group](https://cctalent.global/en/about-us) Team, {{ contact.firstname }} is the [Job Title] at [Company]. They are interested in exploring strategic solutions for {{ contact.quote_role_to_outsource }}.

{{ contact.firstname }}, CC.Talent Group, founded in the Netherlands, is an ISO-certified outsourcing partner that connects companies with qualified remote professionals.

Crucial Next Step to Maximize Your Time:
{{ contact.firstname }}, we've attached a [valuable guide to outsourcing](https://drive.google.com/file/d/1d6F-DQKVM65h3KE5CnQKJqaee-FMxUuo/view?usp=sharing) and an [outsourcing whitepaper](https://drive.google.com/file/d/1itLCO15HxDEUC8gK4FXpGQ6WmB_ZeW5b/view?usp=sharing).

I will leave you to connect. Thank you and have a great week ahead!

Best regards,`,
      },
    ],
  },
  {
    partner: 'EASTVANTAGE',
    variants: [
      {
        to: 'reina.elca@eastvantage.com',
        cc: '',
        subject: "[OL] Meeting Confirmation: Eastvantage <> [Lead's First and Last name] - Date of Appointment",
        label: 'Default',
        body: `Hi {{ contact.firstname }} and Eastvantage Team,

I'm pleased to formally connect you both. This meeting represents a strategic opportunity, and I'm confident Eastvantage's proven expertise aligns perfectly with your goals for {{ contact.quote_role_to_outsource }}.

Date:
Time:
Meeting Location/Link:

Eastvantage Team, {{ contact.firstname }} is the [Job Title] at [Company]. They are interested in exploring strategic solutions for {{ contact.quote_role_to_outsource }}.

{{ contact.firstname }}, Eastvantage is a global business solutions partner headquartered in Bulgaria, with delivery centers across Asia and Europe. Since 2010, the company has been empowering businesses worldwide through customized outsourcing services.

Crucial Next Step to Maximize Your Time:
{{ contact.firstname }}, we've attached a [valuable guide to outsourcing](https://drive.google.com/file/d/1d6F-DQKVM65h3KE5CnQKJqaee-FMxUuo/view) and an [outsourcing whitepaper](https://drive.google.com/file/d/1itLCO15HxDEUC8gK4FXpGQ6WmB_ZeW5b/view?usp=sharing).

I will leave you to connect. Thank you and have a great week ahead!

Best regards,`,
      },
    ],
  },
  {
    partner: 'EXPEDOCK',
    variants: [
      {
        to: 'lance@expedock.com,jeff@expedock.com,sales@expedock.com',
        cc: '',
        subject: "Meeting Confirmation: Expedock <> [Lead's First and Last name] - Date of Appointment",
        label: 'Default',
        body: `Hi {{ contact.firstname }} and Expedock Team,

I'm pleased to formally connect you both. This meeting represents a strategic opportunity, and I'm confident Expedock's proven expertise aligns perfectly with your goals for {{ contact.quote_role_to_outsource }}.

Date:
Time:
Meeting Location/Link:

[Expedock](https://www.expedock.com/about-us) Team, {{ contact.firstname }} is the [Job Title] at [Company]. They are interested in exploring strategic solutions for {{ contact.quote_role_to_outsource }}.

{{ contact.firstname }}, Expedock is a tech-enabled solutions provider helping businesses scale through a combination of flexible offshore support and AI-powered automation. Founded in San Francisco in 2019 with $21M raised, Expedock supports 60+ global businesses.

Crucial Next Step to Maximize Your Time:
{{ contact.firstname }}, we've attached a [valuable guide to outsourcing](https://drive.google.com/file/d/1d6F-DQKVM65h3KE5CnQKJqaee-FMxUuo/view?usp=sharing) and an [outsourcing whitepaper](https://drive.google.com/file/d/1itLCO15HxDEUC8gK4FXpGQ6WmB_ZeW5b/view?usp=sharing).

I will leave you to connect. Thank you and have a great week ahead!

Best regards,`,
      },
    ],
  },
  {
    partner: 'HGS OSS',
    variants: [
      {
        to: 'dillon.esteban@teamhgs.com,Praneeth.Marisa@teamhgs.com',
        cc: '',
        subject: "Meeting Confirmation: HGS OSS <> [Lead's First and Last name] - Date of Appointment",
        label: 'Default',
        body: `Hi {{ contact.firstname }} and HGS OSS Team,

I'm pleased to formally connect you both. This meeting represents a strategic opportunity, and I'm confident HGS OSS's proven expertise aligns perfectly with your goals for {{ contact.quote_role_to_outsource }}.

Date:
Time:
Meeting Location/Link:

[HGS OSS](https://oss.hgs.com/specialist-in-large-teams/) Team, {{ contact.firstname }} is the [Job Title] at [Company]. They are interested in exploring strategic solutions for {{ contact.quote_role_to_outsource }}.

{{ contact.firstname }}, HGS OSS prides itself in providing a world-class offshore team for medium and large businesses. They aim to take businesses to the next level across back-office support, customer service, finance & accounting, digital marketing, and web development.

Crucial Next Step to Maximize Your Time:
{{ contact.firstname }}, we've attached a [valuable guide to outsourcing](https://drive.google.com/file/d/1d6F-DQKVM65h3KE5CnQKJqaee-FMxUuo/view?usp=sharing) and an [outsourcing whitepaper](https://drive.google.com/file/d/1itLCO15HxDEUC8gK4FXpGQ6WmB_ZeW5b/view?usp=sharing).

I will leave you to connect. Thank you and have a great week ahead!

Best regards,`,
      },
    ],
  },
  {
    partner: 'HGS UK',
    variants: [
      {
        to: 'jacqueline.chapman@teamhgs.com',
        cc: '',
        subject: "Meeting Confirmation: HGS UK <> [Lead's First and Last name] - Date of Appointment",
        label: 'Default',
        body: `Hi {{ contact.firstname }} and HGS UK Team,

I'm pleased to formally connect you both. This meeting represents a strategic opportunity, and I'm confident HGS UK's proven expertise aligns perfectly with your goals for {{ contact.quote_role_to_outsource }}.

Date:
Time:
Meeting Location/Link:

[HGS UK](https://oss.hgs.com/specialist-in-large-teams/) Team, {{ contact.firstname }} is the [Job Title] at [Company]. They are interested in exploring strategic solutions for {{ contact.quote_role_to_outsource }}.

{{ contact.firstname }}, HGS UK prides itself in providing a world-class offshore team for medium and large businesses across back-office support, customer service, finance & accounting, digital marketing, and web development.

Crucial Next Step to Maximize Your Time:
{{ contact.firstname }}, we've attached a [valuable guide to outsourcing](https://drive.google.com/file/d/1d6F-DQKVM65h3KE5CnQKJqaee-FMxUuo/view?usp=sharing) and an [outsourcing whitepaper](https://drive.google.com/file/d/1itLCO15HxDEUC8gK4FXpGQ6WmB_ZeW5b/view?usp=sharing).

I will leave you to connect. Thank you and have a great week ahead!

Best regards,`,
      },
    ],
  },
  {
    partner: 'HOPLA',
    variants: [
      {
        to: 'jenn@hopla.online,camilled@hopla.online,josephbryang@hopla.online,mae@hopla.online',
        cc: '',
        subject: "Meeting Confirmation: HOPLA <> [Lead's First and Last name] - Date of Appointment",
        label: 'Default',
        body: `Hi {{ contact.firstname }} and HOPLA Team,

I'm pleased to formally connect you both. This meeting represents a strategic opportunity, and I'm confident HOPLA's proven expertise aligns perfectly with your goals for {{ contact.quote_role_to_outsource }}.

Date:
Time:
Meeting Location/Link:

[HOPLA Team,](https://hopla.online/our-solutions/) {{ contact.firstname }} is the [Job Title] at [Company]. They are interested in exploring strategic solutions for {{ contact.quote_role_to_outsource }}.

{{ contact.firstname }}, HOPLA helps businesses scale fast with exceptional remote talent, any role, anywhere. Their approach combines smart recruitment technology, personalized onboarding and coaching, AI-powered performance monitoring, and dedicated account management.

Crucial Next Step to Maximize Your Time:
{{ contact.firstname }}, we've attached a [valuable guide to outsourcing](https://drive.google.com/file/d/1d6F-DQKVM65h3KE5CnQKJqaee-FMxUuo/view?usp=sharing) and an [outsourcing whitepaper](https://drive.google.com/file/d/1itLCO15HxDEUC8gK4FXpGQ6WmB_ZeW5b/view?usp=sharing).

I will leave you to connect. Thank you and have a great week ahead!

Best regards,`,
      },
    ],
  },
  {
    partner: 'INTEGRATED OS',
    variants: [
      {
        to: 'Partner.Solutions@integratedos.com',
        cc: 'rodneyfrost@lamsongroup.com.au,margaux.monteiro@integratedos.com',
        subject: "Meeting Confirmation: Integrated OS <> [Lead's First and Last name] - Date of Appointment",
        label: 'Partner Solutions',
        body: `Hi {{ contact.firstname }} and Integrated OS Team,

I'm pleased to formally connect you both. This meeting represents a strategic opportunity, and I'm confident IntegratedOS' proven expertise aligns perfectly with your goals for {{ contact.quote_role_to_outsource }}.

Date:
Time:
Meeting Location/Link:

[IntegratedOS](https://integratedos.com/see-if-were-a-fit/) Team, {{ contact.firstname }} is the [Job Title] at [Company]. They are interested in exploring strategic solutions for {{ contact.quote_role_to_outsource }}.

{{ contact.firstname }}, Integrated OS was formed in 2006 and has helped more than 50 Australian businesses focus on their goals by facilitating recruitment and setting up their own dedicated offshore teams in the Philippines.

Crucial Next Step to Maximize Your Time:
{{ contact.firstname }}, we've attached a [valuable guide to outsourcing](https://drive.google.com/file/d/1d6F-DQKVM65h3KE5CnQKJqaee-FMxUuo/view?usp=sharing) and an [outsourcing whitepaper](https://drive.google.com/file/d/1itLCO15HxDEUC8gK4FXpGQ6WmB_ZeW5b/view?usp=sharing).

I will leave you to connect. Thank you and have a great week ahead!

Best regards,`,
      },
      {
        to: 'jerico@outposter.com.au',
        cc: '',
        subject: "Meeting Confirmation: Outposter <> [Lead's First and Last name] - Date of Appointment",
        label: 'Jerico (Outposter)',
        body: `Hi {{ contact.firstname }} and Jerico,

I'm pleased to formally connect you both. This meeting represents a strategic opportunity, and I'm confident Outposter's proven expertise aligns perfectly with your goals for {{ contact.quote_role_to_outsource }}.

Date:
Time:
Meeting Location/Link:

[Outposter](https://outposter.com.au/about-us/) Team, {{ contact.firstname }} is the [Job Title] at [Company]. They are interested in exploring strategic solutions for {{ contact.quote_role_to_outsource }}.

{{ contact.firstname }}, Outposter is a leading global outsourcing company headquartered in Brisbane, Australia, with offices in the Philippines, Singapore, and India. They provide staffing solutions to both large and small companies, short or long term projects.

Crucial Next Step to Maximize Your Time:
{{ contact.firstname }}, we've attached a [valuable guide to outsourcing](https://drive.google.com/file/d/1d6F-DQKVM65h3KE5CnQKJqaee-FMxUuo/view?usp=sharing) and an [outsourcing whitepaper](https://drive.google.com/file/d/1itLCO15HxDEUC8gK4FXpGQ6WmB_ZeW5b/view?usp=sharing).

I will leave you to connect. Thank you and have a great week ahead!

Best regards,`,
      },
    ],
  },
  {
    partner: 'OA (BIZ DEV)',
    variants: [
      {
        to: '',
        cc: '',
        subject: "Meeting Confirmation: Outsource Accelerator <> [Lead's First and Last name] - Date of Appointment",
        label: 'Default',
        body: `Hi {{ contact.firstname }} and Outsource Accelerator Business Development Team,

I'm pleased to formally connect you both. This meeting represents a strategic opportunity, and I'm confident that our Business Development Team with Outsource Accelerator's proven expertise aligns perfectly with your goals for {{ contact.quote_role_to_outsource }}.

Date:
Time:
Meeting Location/Link:

[Outsource Accelerator](https://www.outsourceaccelerator.com/about/) Team, {{ contact.firstname }} is the [Job Title] at [Company]. They are interested in exploring strategic solutions for {{ contact.quote_role_to_outsource }}.

{{ contact.firstname }}, Outsource Accelerator is the world's leading outsourcing marketplace and advisory platform, helping companies build and scale high-performing offshore teams.

Crucial Next Step to Maximize Your Time:
{{ contact.firstname }}, we've attached a [valuable guide to outsourcing](https://drive.google.com/file/d/1fCz2JSSUH_PIEGa4HzwEejoFEf2T5hwo/view?usp=sharing) and an [outsourcing whitepaper](https://drive.google.com/file/d/1itLCO15HxDEUC8gK4FXpGQ6WmB_ZeW5b/view?usp=sharing).

I will leave you to connect. Thank you and have a great week ahead!

Best regards,`,
      },
    ],
  },
  {
    partner: 'PANDR',
    variants: [
      {
        to: 'jesse.k@pandroutsourcing.com',
        cc: '',
        subject: "(SP 2.0) Meeting Confirmation: PANDR <> [Lead's First and Last name] - Date of Appointment",
        label: 'Default',
        body: `Hi {{ contact.firstname }} and PANDR Team,

I'm pleased to formally connect you both. This meeting represents a strategic opportunity, and I'm confident PANDR's proven expertise aligns perfectly with your goals for {{ contact.quote_role_to_outsource }}.

Date:
Time:
Meeting Location/Link:

[PANDR](https://www.pandroutsourcing.com/about/) Team, {{ contact.firstname }} is the [Job Title] at [Company]. They are interested in exploring strategic solutions for {{ contact.quote_role_to_outsource }}.

{{ contact.firstname }}, PANDR works with hundreds of amazing people who help businesses with their outsourcing needs across marketing, sales, IT, and much more. The average PANDR-managed staff member stays with the business for over 3 years.

Crucial Next Step to Maximize Your Time:
{{ contact.firstname }}, we've attached a [valuable guide to outsourcing](https://drive.google.com/file/d/1d6F-DQKVM65h3KE5CnQKJqaee-FMxUuo/view?usp=sharing) and an [outsourcing whitepaper](https://drive.google.com/file/d/1itLCO15HxDEUC8gK4FXpGQ6WmB_ZeW5b/view?usp=sharing).

I will leave you to connect. Thank you and have a great week ahead!

Best regards,`,
      },
    ],
  },
  {
    partner: 'PEOPLEPARTNERS BPO',
    variants: [
      {
        to: '',
        cc: '',
        subject: "Meeting Confirmation: People Partners BPO <> [Lead's First and Last name] - Date of Appointment",
        label: 'People Partners Team',
        body: `Hi {{ contact.firstname }} and People Partners Team,

I'm pleased to formally connect you both. This meeting represents a strategic opportunity, and I'm confident People Partners' proven expertise aligns perfectly with your goals for {{ contact.quote_role_to_outsource }}.

Date:
Time:
Meeting Location/Link:

Riaz, {{ contact.firstname }} is the [Job Title] at [Company]. They are interested in exploring strategic solutions for {{ contact.quote_role_to_outsource }}.

{{ contact.firstname }}, [PeoplePartners](https://peoplepartnersbpo.com/who-we-are/our-story/) is an ISO-certified strategic workforce partner. They run on EOS, are Great Place to Work certified, and were named a Fortune 100 Best Companies to Work For in Southeast Asia in 2025. Backed by zero upfront costs, no long-term lock-in, and a 90-day replacement guarantee.

Crucial Next Step to Maximize Your Time:
{{ contact.firstname }}, we've attached a [valuable guide to outsourcing](https://drive.google.com/file/d/1d6F-DQKVM65h3KE5CnQKJqaee-FMxUuo/view) and an [outsourcing whitepaper](https://drive.google.com/file/d/1itLCO15HxDEUC8gK4FXpGQ6WmB_ZeW5b/view?usp=sharing).

I will leave you to connect. Thank you and have a great week ahead!

Best regards,`,
      },
      {
        to: 'pren.naidoo@peoplepartnersbpo.com',
        cc: '',
        subject: "Meeting Confirmation: People Partners BPO <> [Lead's First and Last name] - Date of Appointment",
        label: 'Pren Naidoo',
        body: `Hi {{ contact.firstname }} and People Partners Team,

I'm pleased to formally connect you both. This meeting represents a strategic opportunity, and I'm confident People Partners' proven expertise aligns perfectly with your goals for {{ contact.quote_role_to_outsource }}.

Date:
Time:
Meeting Location/Link:

Roumayne, {{ contact.firstname }} is the [Job Title] at [Company]. They are interested in exploring strategic solutions for {{ contact.quote_role_to_outsource }}.

{{ contact.firstname }}, [PeoplePartners](https://peoplepartnersbpo.com/who-we-are/our-story/) is an ISO-certified strategic workforce partner. They run on EOS, are Great Place to Work certified, and were named a Fortune 100 Best Companies to Work For in Southeast Asia in 2025. Backed by zero upfront costs, no long-term lock-in, and a 90-day replacement guarantee.

Crucial Next Step to Maximize Your Time:
{{ contact.firstname }}, we've attached a [valuable guide to outsourcing](https://drive.google.com/file/d/1d6F-DQKVM65h3KE5CnQKJqaee-FMxUuo/view) and an [outsourcing whitepaper](https://drive.google.com/file/d/1itLCO15HxDEUC8gK4FXpGQ6WmB_ZeW5b/view?usp=sharing).

I will leave you to connect. Thank you and have a great week ahead!

Best regards,`,
      },
    ],
  },
  {
    partner: 'SATELLITE OFFICE',
    variants: [
      {
        to: 'MarkR@satelliteoffice.com,jmcalmond@satelliteoffice.com',
        cc: '',
        subject: "Meeting Confirmation: Satellite Office <> [Lead's First and Last name] - Date of Appointment",
        label: 'Default',
        body: `Hi {{ contact.firstname }} and Satellite Office Team,

I'm pleased to formally connect you both. This meeting represents a strategic opportunity, and I'm confident Satellite Office's proven expertise aligns perfectly with your goals for {{ contact.quote_role_to_outsource }}.

Date:
Time:
Meeting Location/Link:

[Satellite Office](https://www.satelliteoffice.com/why-choose-satellite-office/) Team, {{ contact.firstname }} is the [Job Title] at [Company]. They are interested in exploring strategic solutions for {{ contact.quote_role_to_outsource }}.

{{ contact.firstname }}, Satellite Office helps businesses build high-performing offshore teams in the Philippines, enabling them to scale efficiently and save up to 70% on staffing costs. ISO-27001 and HIPAA certified, with over 12 years of industry experience.

Crucial Next Step to Maximize Your Time:
{{ contact.firstname }}, we've attached a [valuable guide to outsourcing](https://drive.google.com/file/d/1d6F-DQKVM65h3KE5CnQKJqaee-FMxUuo/view?usp=sharing) and an [outsourcing whitepaper](https://drive.google.com/file/d/1itLCO15HxDEUC8gK4FXpGQ6WmB_ZeW5b/view?usp=sharing).

I will leave you to connect. Thank you and have a great week ahead!

Best regards,`,
      },
    ],
  },
  {
    partner: 'SIRIUS',
    variants: [
      {
        to: 'craig@sirius-support.com,karen.infantado@sirius-support.com',
        cc: '',
        subject: "Meeting Confirmation: Sirius Support <> [Lead's First and Last name] - Date of Appointment",
        label: 'Default',
        body: `Hi {{ contact.firstname }} and Sirius Support Team,

I'm pleased to formally connect you both. This meeting represents a strategic opportunity, and I'm confident Sirius Support's proven expertise aligns perfectly with your goals for {{ contact.quote_role_to_outsource }}.

Date:
Time:
Meeting Location/Link:

[Sirius Support Team,](https://www.sirius-support.com/resources/aboutus) {{ contact.firstname }} is the [Job Title] at [Company]. They are interested in exploring strategic solutions for {{ contact.quote_role_to_outsource }}.

{{ contact.firstname }}, Sirius Support is a human-centered, AI-powered customer support company. They deliver flexible virtual contact center services, expertly trained global teams, and technology that adapts as you grow.

Crucial Next Step to Maximize Your Time:
{{ contact.firstname }}, we've attached a [valuable guide to outsourcing](https://drive.google.com/file/d/1d6F-DQKVM65h3KE5CnQKJqaee-FMxUuo/view?usp=sharing) and an [outsourcing whitepaper](https://drive.google.com/file/d/1itLCO15HxDEUC8gK4FXpGQ6WmB_ZeW5b/view?usp=sharing).

I will leave you to connect. Thank you and have a great week ahead!

Best regards,`,
      },
    ],
  },
  {
    partner: 'SIX ELEVEN',
    variants: [
      {
        to: 'kris.sanchez@sixeleven.com',
        cc: '',
        subject: "Meeting Confirmation: Six Eleven <> [Lead's First and Last name] - Date of Appointment",
        label: 'Default',
        body: `Hi {{ contact.firstname }} and Six Eleven Team,

I'm pleased to formally connect you both. This meeting represents a strategic opportunity, and I'm confident Six Eleven's proven expertise aligns perfectly with your goals for {{ contact.quote_role_to_outsource }}.

Date:
Time:
Meeting Location/Link:

[Six Eleven](https://www.sixelevenbpo.com/about-us/) Team, {{ contact.firstname }} is the [Job Title] at [Company]. They are interested in exploring strategic solutions for {{ contact.quote_role_to_outsource }}.

{{ contact.firstname }}, Six Eleven is an 18-year-old call center and BPO company with over 5,500 full-time staff and 6 service delivery centers in the Philippines. PCI, HIPAA, ISO, and SOC2 certified.

Crucial Next Step to Maximize Your Time:
{{ contact.firstname }}, we've attached a [valuable guide to outsourcing](https://drive.google.com/file/d/1d6F-DQKVM65h3KE5CnQKJqaee-FMxUuo/view?usp=sharing) and an [outsourcing whitepaper](https://drive.google.com/file/d/1itLCO15HxDEUC8gK4FXpGQ6WmB_ZeW5b/view?usp=sharing).

I will leave you to connect. Thank you and have a great week ahead!

Best regards,`,
      },
    ],
  },
  {
    partner: 'VA PLATINUM',
    variants: [
      {
        to: 'pedro@vaplatinum.com.au',
        cc: 'bel.l@vaplatinum.com.au',
        subject: "Meeting Confirmation: VA Platinum <> [Lead's First and Last name] - Date of Appointment",
        label: 'Default',
        body: `Hi {{ contact.firstname }} and VA Platinum Team,

I'm pleased to formally connect you both. This meeting represents a strategic opportunity, and I'm confident VA Platinum's proven expertise aligns perfectly with your goals for {{ contact.quote_role_to_outsource }}.

Date:
Time:
Meeting Location/Link:

[VA Platinum](https://www.vaplatinum.com.au/ph/about-us) Team, {{ contact.firstname }} is the [Job Title] at [Company]. They are interested in exploring strategic solutions for {{ contact.quote_role_to_outsource }}.

{{ contact.firstname }}, VAP is an Australian-owned staffing provider that helps businesses scale efficiently with highly skilled offshore talent. With teams based in Cebu and Davao, Philippines, VAP supports hundreds of Australian businesses across multiple industries.

Crucial Next Step to Maximize Your Time:
{{ contact.firstname }}, we've attached a [valuable guide to outsourcing](https://drive.google.com/file/d/1d6F-DQKVM65h3KE5CnQKJqaee-FMxUuo/view?usp=sharing) and an [outsourcing whitepaper](https://drive.google.com/file/d/1itLCO15HxDEUC8gK4FXpGQ6WmB_ZeW5b/view?usp=sharing).

I will leave you to connect. Thank you and have a great week ahead!

Best regards,`,
      },
    ],
  },
  {
    partner: 'ZIGZAG',
    variants: [
      {
        to: 'wil@zigzagoffshoring.com,kino@zigzagoffshoring.com',
        cc: '',
        subject: "Meeting Confirmation: ZigZag <> [Lead's First and Last name] - Date of Appointment",
        label: 'Default',
        body: `Hi {{ contact.firstname }} and ZigZag Team,

I'm pleased to formally connect you both. This meeting represents a strategic opportunity, and I'm confident ZigZag's proven expertise aligns perfectly with your goals for {{ contact.quote_role_to_outsource }}.

Date:
Time:
Meeting Location/Link:

[ZigZag Team,](https://zigzagoffshoring.com/services/#faq) {{ contact.firstname }} is the [Job Title] at [Company]. They are interested in exploring strategic solutions for {{ contact.quote_role_to_outsource }}.

{{ contact.firstname }}, ZigZag provides a fully serviced partnership for growing businesses, delivering end-to-end solutions tailored to each company's unique staffing needs. They manage all employment logistics for your offshore team so you can focus on core business priorities.

Crucial Next Step to Maximize Your Time:
{{ contact.firstname }}, we've attached a [valuable guide to outsourcing](https://drive.google.com/file/d/1d6F-DQKVM65h3KE5CnQKJqaee-FMxUuo/view?usp=sharing) and an [outsourcing whitepaper](https://drive.google.com/file/d/1itLCO15HxDEUC8gK4FXpGQ6WmB_ZeW5b/view?usp=sharing).

I will leave you to connect. Thank you and have a great week ahead!

Best regards,`,
      },
    ],
  },
]
