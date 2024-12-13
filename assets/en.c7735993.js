var s = Object.defineProperty,
  c = Object.defineProperties;
var l = Object.getOwnPropertyDescriptors;
var i = Object.getOwnPropertySymbols;
var u = Object.prototype.hasOwnProperty,
  d = Object.prototype.propertyIsEnumerable;
var n = (o, e, t) =>
    e in o
      ? s(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (o[e] = t),
  a = (o, e) => {
    for (var t in e || (e = {})) u.call(e, t) && n(o, t, e[t]);
    if (i) for (var t of i(e)) d.call(e, t) && n(o, t, e[t]);
    return o;
  },
  r = (o, e) => c(o, l(e));
import { g as p, d as m } from "./index.d1971cae.js";
var h = {
    footer: {},
    header: {
      tooltipEntryFull: "Full Screen",
      tooltipExitFull: "Exit Full Screen",
      enter_app: "ENTER APP",
    },
  },
  y = Object.freeze(
    Object.defineProperty({ __proto__: null, default: h }, Symbol.toStringTag, {
      value: "Module",
    })
  ),
  f = { name: "About Us" },
  g = Object.freeze(
    Object.defineProperty({ __proto__: null, default: f }, Symbol.toStringTag, {
      value: "Module",
    })
  ),
  b = {
    route: {
      about_us: "About us",
      swap: "Swap",
      document: "Whitepaper",
      trade: "Perpetual",
      more_service: "More Services",
      blog: "Blog",
      support: "Support",
      liquidity: "Liquidity",
      staking: "Staking",
      farming: "Farming",
      top_traders: "Top Traders",
    },
    name: "Home",
    footer: {
      content_right:
        "Providing our users with a safe, secure, and easy-to-use platform for all their cryptocurrency needs.<br />Join our community today and start trading, staking, farming, and earning rewards!",
      list_about: {
        document: "Whitepaper",
        contract: "Contract Audit",
        coin_market: "CoinMarketCap",
        coin_gecko: "CoinGecko",
      },
      about: "About",
      service: "Service",
      list_service: {
        swap: "Swap",
        liquid: "Liquidity",
        staking: "Staking",
        farm: "Farming",
        top_trade: "Top Traders",
      },
      copy_right: "Copyright \xA9 2023 Appleswap Inc. All Rights Reserved.",
    },
    multi_collapse: {
      your_name_placehodler: "Your name",
      your_email_placehodler: "Your email",
      your_problem_placehodler: "Tell us what problems or questions you have",
      sent_buttom: "Send",
      main_title: "Multichain collabs",
      binance_chain: "BNB CHAIN",
      arbitrum_chain: "ARBITRUM",
      etherium_chain: "ETHEREUM",
      need_help: "Need Help?",
      main_content:
        "If you need help or have any questions, contact us via email or join one of our social channels",
    },
    plat_form: {
      user: "Users",
      transaction: "Transactions",
      label_button_join: "Will you join them?",
      main_title: "Used by millions.<br />Trusted with billions.",
      main_content:
        "has the most users of any decentralized platform, ever. And those users are now entrusting the platform with over $3 million in funds.",
    },
    our_service: {
      main_title: "All in one place with Appleswap",
      service_title_0: "Perpetual",
      service_title_1: "Swap",
      service_title_2: "Liquidity",
      service_title_3: "Staking",
      service_title_4: "Farming",
      service_title_5: "Top Traders",
      service_content_0:
        "Enjoy fast and seamless future trading anytime, anywhere",
      service_content_1:
        "Trade with ease using our low-fee and fast transaction interface.",
      service_content_2:
        "Earn interest by providing liquidity to our pools and share in transaction fees.",
      service_content_3:
        "Earn passive income and support the blockchain by staking your assets.",
      service_content_4:
        "Boost your returns with our high-yield farming options in community-run pools.",
      service_content_5:
        "Get prizes when you are in top traders with the highest trading volume.",
    },
    home_main: {
      first_title: "Welcome to Appleswap.ai",
      main_content:
        "Whether you're looking to swap your crypto, provide liquidity, stake your assets, or farm for rewards, we've got you covered.",
      trade_button: "Trade now",
      main_title:
        'The <span class="bg-gradient-to-r from-[#FFAAF7] to-[#824099] inline-block text-transparent bg-clip-text" > all-in-one AI Technology Platform </span> for all your cryptocurrency needs!',
    },
    our_strengths: {
      title_main: "Our Strengths",
      title_item_1: "Round-the-Clock Customer Support",
      title_item_2: "Top-Notch Security Measures",
      title_item_3: "Extensive Liquidity",
      title_item_4: "User-Friendly Interface",
      title_item_5: "Reliable System Performance",
      title_item_6: "AI Technology",
      content_item_6:
        "Provide users with a secure and seamless trading experience on Appleswap CEX and DEX, offering leverage of up to 150x , Optimizing the transactions and Reduced swap costs.",
      content_item_1:
        "Need assistance? Our dedicated support team is available 24/7. Our highly-trained professionals are committed to resolving any issues or queries promptly, ensuring your satisfaction and peace of mind.",
      content_item_2:
        "The security of your assets is our utmost priority. We employ robust measures, including two-factor authentication (2FA), to provide a safe environment for storing and trading cryptocurrencies.",
      content_item_3:
        "Experience unmatched liquidity with our platform, enabling seamless and efficient trading with minimal slippage. Our deep order book ensures that you can execute trades smoothly and at competitive prices.",
      content_item_4:
        "Our platform is designed with simplicity in mind, ensuring that everyone, regardless of their background or experience, can easily participate in cryptocurrency trading.",
      content_item_5:
        "Rest assured knowing that our system is stable and reliable. We prioritize maintaining a functional platform, ensuring minimal downtime and uninterrupted trading activities.",
    },
    about_page: {
      main_title: "About Us &#124; Appleswap",
      introduce_title: "Introducing Our Journey",
      introduce_content:
        "At Appleswap.ai, we take pride in being the pioneering cryptocurrency exchange that combines the best of both worlds: a CEX-DEX hybrid platform. By using AI technology, we provide users with a secure and seamless trading experience on Appleswap CEX and DEX, offering leverage of up to 150x. With an extensive range of spot and futures markets, comprehensive trading services, and a thriving Appleswap ecosystem, we are committed to making crypto and blockchain easily accessible to all individuals.",
      mission_item_1_title: "Our Mission",
      mission_item_2_title: "Our Vision",
      mission_item_1_content:
        "We have a strong belief in the immense potential of AI and blockchain technology and are dedicated to democratizing the use of cryptocurrencies. We understand that investing and speculating in crypto assets can be complex and intimidating for many. That's why our vision is to create a user-friendly platform that makes this revolutionary technology accessible to everyone, regardless of their technical expertise. Our team, comprised of individuals with extraordinary values, is working tirelessly to develop a simple and intuitive platform where users can effortlessly buy, sell, hold, and speculate on crypto assets.",
      mission_item_2_content:
        "At Appleswap.ai, we envision a future where blockchain technology and cryptocurrencies are seamlessly integrated into people's lives. Our vision is to empower individuals from all walks of life to confidently engage with crypto assets, free from the barriers of complexity and technicality. We are committed to building a user-centric platform that simplifies the process of buying, selling, holding, and speculating on cryptocurrencies, ensuring accessibility for both experienced traders and newcomers alike.",
    },
    document: {
      menu: {
        Introduction: "Introduction",
        Advantages: "Advantages",
        Tokenomics: "Tokenomics",
        ApToken: "AP Token & Contracts",
        Allocation: "Allocation",
        Transaction: "Transaction Fee",
        Community: "Community",
        Privacy: "Privacy Policy",
      },
      Introduction: {
        content:
          "Appleswap.ai is a decentralized derivatives trading protocol. Users can enjoy a smooth trading experience while connecting to Appleswap with just one click through their decentralized wallets. With an extensive range of spot and futures markets, comprehensive trading services, and a thriving Appleswap ecosystem, we are committed to making crypto and blockchain easily accessible to all individuals.",
      },
      Advantages: {
        content:
          "When using Appleswap for trading, users can take advantage of the following benefits:",
        feature_1_title: "User-Friendly:",
        feature_2_title: "Trading Volume Leaderboard:",
        feature_3_title: "Enhanced Privacy:",
        feature_4_title: "Reduced transaction costs:",
        feature_5_title: "Heightened Security:",
        feature_1_content:
          "The DEX provides a fast and intuitive experience, thanks to the implementation of AI technology. Users can trade swiftly on a platform that is easy to navigate.",
        feature_2_content:
          "The leaderboard rewards are based on trading volume. The more trades, the larger the rewards.",
        feature_3_content:
          "There is no need to complete any sign-up procedures. Just connect your personal wallet, and you're ready to start trading.",
        feature_4_content:
          "By eliminating the need for intermediaries, users can save on gas fees associated with each transaction, as they only have to pay miners.",
        feature_5_content:
          "Trading directly on the platform ensures a more secure experience, as there are no middlemen involved. Users have greater control and autonomy in a decentralized environment.",
      },
      ApToken: {
        block_chain: "Blockchain Network:",
        total_sub: "Total supply:",
        smart_contract: "Smart Contract:",
      },
      Allocation: {
        Ap_token_title: "AP Token Allocation",
        Presale: " Presale",
        add_liquidity: " Add Liquidity Pool",
        staking_pool: "Staking Pool",
      },
      Allocation_details: {
        title: "Allocation Details",
        item_1:
          "The fixed supply of tokens can create scarcity and limit the availability of AP Tokens in the market. This has the potential to increase the token's value in the future if there is a higher demand for using and purchasing AP Tokens.",
        item_2:
          "Selling tokens during the fair launch stage helps establish an initial user base and attract investor interest. This token quantity can build a community of AP Token users and influence its value and liquidity.",
        item_3:
          "Utilizing a portion of AP Tokens to provide liquidity to the trading platform can enhance liquidity and increase trading capabilities for users. This can be appealing to investors who want to participate in the market and execute convenient transactions.",
        item_4:
          "The staking pool offers investors the opportunity to earn profits by locking and providing AP Tokens. The token quantity used in the staking pool can limit the token supply in the market and create a scarce environment.",
        item_5:
          "The fact that the founders do not hold AP Tokens can instill trust and transparency within the user community, as there is no potential for them to sell and create selling pressure on the token price.",
        item_6: "Airdrops involve distributing tokens to develop communities.",
        item_6_content: "100,000 AP are used for Airdrop:",
        item_1_content:
          "The total supply of AP Tokens is 100,000,000, and no additional tokens can be minted:",
        item_2_content:
          "61,000,000 AP tokens were sold during the fair launch phase:",
        item_3_content: "30,487,800 AP Tokens are used for liquidity addition:",
        item_4_content:
          "8,412,200 AP Tokens are used for the staking pool over a period of 6 months:",
        item_5_content: "The project founders do not hold any AP Tokens:",
      },
      Transaction: {
        title: "Transaction Fee ",
        title_2:
          "Overall, investing in AP Token can be attractive to investors because:",
        item_1_content: "The transaction fee for profit generation is 1%: ",
        item_2_content: "The transaction fee for liquidity provision is 1%: ",
        item_3_content: "5% charity and marketing fee: ",
        item_4_content: "AI technology commits to lower fees: ",
        item_5_content: "Commitment to buy back AP Tokens from swap fees: ",
        item_1:
          "The transaction fee is integrated into the system and collected from transactions on the Appleswap.ai platform. This fee can be used to generate profits for AP Token holders.",
        item_2:
          "The transaction fee for liquidity provision is collected from using AP Tokens during transactions on the platform. This can create an income stream related to providing liquidity and appeal to investors interested in earning profits from liquidity provision.",
        item_3:
          "A percentage of the transaction fee is committed to supporting charitable and marketing activities. This can attract individuals who are interested in supporting charitable initiatives and contributing to social causes.",
        item_4:
          "The commitment to using AI technology to reduce transaction fees can provide benefits to users. This can be appealing to investors who want to trade with lower fees compared to other swap platforms.",
        item_5:
          "50% of the swap fees are committed to buying back AP Tokens from the market and burning them. This can reduce the supply of AP Tokens in the market and create a potential for token holders to experience price appreciation.",
        item_6:
          "The fixed total supply and inability to mint additional tokens create the potential for price appreciation.",
        item_7:
          "The fair launch and utilization of the token for liquidity and staking pool create a community of token users.",
        item_8:
          "The transparency of founders not holding tokens can instill trust within the community.",
        item_9:
          "Transaction fees and the commitment to buy back AP Tokens can generate profits for token holders.",
        item_10:
          "AI technology and the commitment to lower fees can be appealing to investors.",
        item_11:
          "The commitment to charity and marketing can attract those interested in social causes.",
      },
      community: {
        title: "Community",
        latest_new: "Latest News",
        view_latest: "View now!",
        Twitter: "Twitter :",
        Telegram: "Telegram Channel (Announcements) :",
        Telegram_community: "Telegram Community :",
        Facebook: "Facebook :",
        Medium: "Medium :",
        Reddit: "Reddit :",
        CMC: "CMC Community :",
        coming_soon: "Coming soon",
      },
      Privacy: {
        title: "Privacy Policy",
        content_main:
          'This Privacy Policy is a part of the Terms of Use (TOU) of Appleswap. The definitions used in this Privacy Policy have the same meanings as in the TOU unless stated otherwise.<br></br> This Privacy Policy provides an explanation of how Appleswap and its operators collect, use, process, disclose, share, transfer, and protect personal information obtained through Appleswap and its partners. The terms "we," "us," and "our" refer to Appleswap and its operators. When we request specific personal information from users, it is either because we are legally required to collect such information or because it is relevant to our stated purposes. <br><br/> Please read this Privacy Policy carefully in its entirety. By visiting Appleswap, whether you register for or log into the Appleswap Services or not, you acknowledge, understand, and consent to all the provisions described in this Privacy Policy. We will not use your personal information for any purposes not covered by this Privacy Policy or the TOU (including any other business rules of ApolloX) without prior notification and your consent. ',
        information_collect: {
          title: "1. Information We Collect",
          content:
            "The following types of information are collected when you register for and use Appleswap Services:",
          item_1: "1.1 Information Provided During Registration",
          item_1_content:
            'When you create an Appleswap Account, you provide us with your email address, password, and other information to help identify you (referred to as "Identification Information"). You may also choose to add a phone number for SMS or a Google Authenticator account for Two-Factor Authentication to enhance account security.',
          item_2:
            "1.2 Information Collected to Comply with Regulatory Policies",
          item_2_content:
            "To comply with global industry regulatory standards, local industry regulatory standards, and government orders relating to Anti-Money Laundering (AML), Know-Your-Client (KYC), and Counter-Terrorist Financing (CTF), Appleswap is required to collect personal information in addition to Identification Information. Each time we collect information, we will explain the content and requirements of such personal information, and we reserve the right to modify the content and requirements of the collected information as global industry regulatory standards, local regulatory standards, or government orders change.",
          item_3:
            "1.3 Information Collected during the Use of Appleswap Services",
          item_3_content:
            'a. Service Usage Information<br></br>When you access and use Appleswap Services, we may monitor and collect tracking information related to your usage, including but not limited to your phone number, access date and time, device type and identification, operating system and hardware settings, browser type, and information derived from SIM cards, network operators, IP addresses, GPS, base stations, and WLAN (referred to as "Service Usage Information"). This information may be obtained directly by Appleswap or through third-party service providers. Collecting Service Usage Information helps ensure that our interface is accessible across all platforms and can assist in criminal investigations.<br></br>b. Transaction Information <br></br>For all personal and institutional user accounts, we may collect transaction information as you use Appleswap Services, including but not limited to deposit snapshots, account balances, trade history (such as transaction initiation, payment method, price, quantity, time, withdrawal, and authorization information), order activity, and distribution history (referred to as "Transaction Information"). We collect this transaction information to monitor suspicious trading activity for user fraud protection, legal case resolution, and any other purposes disclosed in this Privacy Policy.<br></br>c. Communication Information<br></br>For the purposes disclosed in this Privacy Policy, you agree that we are entitled to collect and use the information contained in or related to your communications with us or generated through your use of Appleswap Services (referred to as "Communication Information"). This includes:<br></br>1. All messages, requests, or other information you send during your contact with Appleswap.<br/>2. All communications and file attachments in connection with your transactions with other users or other data generated primarily through your communications with them.<br></br>d. Financial Information:<br></br>You agree that, for the purposes disclosed in this Privacy Policy, we are entitled to collect and use the information contained in or related to your financial information when you use Appleswap Services, including, without limitation, bank account information, payment card primary account number (PAN), transaction history, trading data, and/or tax identification. We collect such financial information to monitor suspicious financial activity for user fraud protection, legal case resolution, and any other purposes disclosed in this Privacy Policy.',
        },
        how_do_collect: {
          title: "2. How do we collect information\uFF1F",
          content:
            "Most of the personal information that we collect is directly provided by you. In the following situations, we will collect and process information about you:<br></br>a. where you register for, log in, or visit Appleswap, or use any service of Appleswap;<br />b. where you voluntarily complete any user survey or provide feedback to us via email or any other channel;c. where you use cookies of the browser or software in visiting or using our website or APPs;<br/>d. other situations where we may automatically collect your information as mentioned in this Privacy Policy or our TOU (including the Appleswap Platform Rules, the same below).",
          item_1: "2.1 Information Appleswap Automatically Collects",
          item_1_content: "",
          item_2: "2.2 Information Collected from the Third-party Sources",
          item_2_content:
            "We may collect information about you from third party sources, including but not limited to, the following channels:<br></br>a. public databases, credit bureaus, and ID verification partners;<br/>b. blockchain data;<br/>c. marketing partners and resellers;<br/>d. advertising partners and analytics providers.",
          item_3: "2.3 Anonymized and Aggregated Data",
          item_3_content:
            "Anonymization is a data processing technique that removes or modifies personal information so that it cannot be associated with a specific individual. Except for this section, none of the other provisions of this Privacy Policy apply to anonymized or aggregated personal data (i.e., information about our Users that we combine together so that it no longer identifies or references an individual User).<br></br>We may use anonymized or aggregated customer data for any business purpose, including to better understand Users\u2019 needs and behaviors, improve our products and services, conduct business intelligence and marketing, and detect security threats. We may perform our own analytics on anonymized data or enable analytics provided by third parties.",
        },
        we_use_collect: {
          title: "3. How do we use the information we collect?",
          content:
            "We use the information we collect about you for the following purposes or in the following ways:",
          item_1: "3.1 To Provide and Maintain Appleswap Services",
          item_1_content:
            "We use the information collected to deliver, maintain, and provide better Appleswap Services (including but not limited to processing transactions) and verify Users\u2019 identities.<br></br>We use the IP address and unique identifiers stored in your device\u2019s cookies to help us authenticate your identity and activities and provide Appleswap Services. Given our legal obligations and system requirements, we cannot provide you with all or some of Appleswap Services without data like Identification Information, Supervision Information, Service Usage Information, Communication Information, and Transaction Information.",
          item_2: "3.2 To Protect Our Users",
          item_2_content:
            "We use the information collected to protect our platforms, Users\u2019 accounts, and archives.<br></br>We use IP addresses and cookies to protect against automated abuse such as spam, phishing, and Distributed Denial of Service (DDoS) attacks.<br></br>We analyze trading activities with the goal of detecting suspicious behaviors as early as possible to prevent potential fraud and the loss of funds to bad actors.",
          item_3: "3.3 To Comply with Legal and Regulatory Requirements",
          item_3_content:
            "With respect to the privacy and security of personal information, we will use the information in compliance with our legal obligations, government requests, and reasonable user-generated inquiries. In cases where it is strictly necessary, such as to protect the vital interests of the Users or other natural persons, to fulfill the purpose of public interest, or to pursue our reasonable interests (but not to damage the interests of the Users), we may process your personal information without your consent. Except for the situations stated in this Privacy Policy or the TOU, we will not disclose or provide any of your personal information to third parties without a review from our legal team and/or prior consent from the User.",
          item_4: "3.4 For Measurement, Research, and Development Purposes",
          item_4_content:
            "We actively measure and analyze data to understand the way you use and interact with Appleswap Services. This review activity is conducted by our operation teams to continually improve our Platforms\u2019 performance and resolve issues with the user experience. In addition, we use such information to customize, measure, and improve Appleswap Services, the content and layout of our websites and apps, and to develop new services.<br></br>We continuously monitor activity information within our systems and our communications with users to look for and quickly fix problems.",
          item_5: "3.5. To Communicate with You",
          item_5_content:
            "We use personal information collected like your phone number or email address, to interact with you directly when providing customer support on a ticket or to keep you informed on logins, transactions, account security, and other aspects. Without collecting and processing your personal information to confirm each communication, we will not be able to respond to your submitted requests, questions, and inquiries. All direct communications are properly kept at Appleswap or the service provider designated by Appleswap, to be reviewed for accuracy, kept as evidence, or used to perform other statutory or contractual obligations.",
          item_6: "3.6 To Enforce Our TOU and Other Agreements",
          item_6_content:
            "The collected information is also used to continually and actively enforce our TOU and other agreements with our Users, including but not limited to reviewing, investigating, and preventing any potentially prohibited or illegal activities that may violate the foregoing provisions, or disclosing the relevant information to a third party in accordance therewith.<br></br>Appleswap reserves the right to suspend or terminate the provision of any Appleswap Services to any user found to be engaged in activities that violate our TOU and other agreements with our Users.",
          item_7:
            "3.7 To Facilitate Corporate Acquisitions, Mergers, or Transactions",
          item_7_content:
            "We may process any information regarding your Appleswap Account and use of Appleswap Services as necessary in the context of corporate acquisitions, mergers, or other corporate transactions.",
          item_8: "3.8 For Marketing and Advertising",
          item_8_content:
            "We may share your personal information with our marketing partners for the purposes of targeting, modeling, and/or analytics, as well as marketing and advertising.",
          item_9: "3.9 For Rebates",
          item_9_content:
            "We may share the information collected, including but not limited to your Identification Information and Transaction Information, with your referrer for the purposes of rebates and other benefits.",
          item_10: "3.10 For Any Other Purpose",
          item_10_content:
            "We may disclose your personal information for any other purpose you consent to.",
        },
        marketing: {
          title: "4. Marketing",
          content:
            "If we think you may like specific Appleswap Services or products and services of our partners, we hope to keep you informed about such products or services.<br></br>If you agree to receive the above marketing information, you can choose to receive it at any time in the future.<br></br>You have the right to ask us at any time to stop contacting you for marketing purposes or to send relevant information to you. If you do not want to be contacted for marketing purposes in the future, please click on the unsubscribe link at the bottom of the marketing email and submit your request to unsubscribe.",
        },
        we_store: {
          title: "5. How do we store and protect user data\uFF1F",
          content:
            "Appleswap has kept your personal information safe using fault-tolerant secured storage with industry-standard encryption and implemented a number of security measures to ensure that your information is not lost, abused, or altered, including, but not limited to:",
          item_1: "5.1 Physical Measures",
          item_1_content:
            "Materials containing your personal information will be stored in a locked place.",
          item_2: "5.2 Electronic Measures",
          item_2_content:
            "Computer data containing your personal information will be stored on computer systems and storage media that are subject to strict log-in restrictions.",
          item_3: "5.3 Management Measures",
          item_3_content:
            "Only authorized employees are permitted to come into contact with your personal information, and such employees must comply with our internal confidentiality rules for personal data. We have also imposed strict physical access controls to buildings and files.",
          item_4: "5.4 Technical Measures",
          item_4_content:
            "Encryption technology such as PCI scanning and Secure Sockets Layered Encryption may be used to transmit and store your personal information. We use various currently available general security technologies and supporting management systems to minimize the risks that your information may be disclosed, damaged, misused, accessed without authorization, disclosed without authorization, or altered.",
          item_5: "5.5 Other Measures",
          item_5_content:
            'Our web server is protected by the "firewall".<br></br>Please note that it is impossible to guarantee the security of all information. As such, we request that you understand your responsibility to independently take safety precautions to protect your own personal information.  You agree that we shall not be liable for any information leakage or other losses not caused by our intention or gross negligence, including but not limited to hacker attacks, power interruptions, or unavoidable technical failures, to the maximum extent permitted by law.<br></br>If you suspect that your personal information has been compromised, especially account and/or password information, please lock your Appleswap Account and immediately contact the Appleswap Customer Support team at chat<br></br>Unless otherwise stipulated by law or the TOU, you agree that we have the right but not the obligation to retain all the collected personal information for the duration of your Appleswap account and for 5 more years after the account is closed.',
        },
        policies: {
          title: "6. Privacy policies of other websites",
          content: "",
          item_1: "6.1 Privacy Policies of Non-Appleswap Websites",
          item_1_content:
            "If you visit other third-party platforms or partners' websites, or apps via the links on Appleswap, you should agree with and abide by their separate and independent privacy policies. We are not responsible for the content or the activities therein.",
          item_2: "6.2 Privacy Policies of Appleswap ",
          item_2_content:
            "This Privacy Policy applies to all platforms, websites, and departments of Appleswap and the Appleswap ecosystem. If you visit any link to any sub-platform of Appleswap, you should agree with and abide by the separate and independent privacy policies of such sub-platforms. If the privacy policy of any sub-platform conflicts with this Privacy Policy, the privacy policy of such sub-platform shall prevail.",
        },
        changes_policy: {
          title: "7. Changes to this privacy policy",
          content:
            "From time to time, Appleswap may revise this Privacy Policy to reflect changes in Law or our personal data collection, processing, and use practices. Changes to this Privacy Policy will be announced by posting on the privacy. You shall regularly review the Privacy Policy and pay attention to its revisions. If you do not agree with the revised content, you shall stop accessing Appleswap immediately. When an updated version of the Privacy Policy is released, your continued access to ApolloX means that you agree to the updated content and agree to abide by the updated Privacy Policy.",
        },
        contact_us: {
          title: "8. Contact us",
          content:
            'We are committed to respecting the freedoms and rights of all our Appleswap users. If you have any questions or concerns regarding this Privacy Policy, or if you would like to file a data protection request, please refer to our Frequently Asked Questions at faq and contact us on our <a href="mailto:support@appleswap.ai">Support Team.</a>',
        },
      },
    },
    road_map: {
      title_main: "Road map",
      to_continue: "To be announced",
      q2_2022: {
        title: "Q2 2022",
        title_second: "Project Planning and Preparation",
        content:
          "&#10022; Finalize vision, objectives, and requirements <br/>&#10022 Assemble team, advisors",
      },
      q3_2022: {
        title: "Q3 2022",
        title_second: "Prototype Development",
        content:
          "&#10022; Develop functional prototype <br/>&#10022 Gather feedback, refine features",
      },
      q4_2022: {
        title: "Q4 2022",
        title_second: "Platform Development and Testing",
        content:
          "&#10022; Full-scale development of the trading platform <br/>&#10022 Implement core features <br/>&#10022 Conduct testing, debugging <br/>&#10022 Engage early adopters for feedback",
      },
      q1_2023: {
        title: "Q1 2023",
        title_second: "Project Inception and Development",
        content:
          "&#10022; Officially launch Appleswap.ai <br/>&#10022 Onboard users, provide initial services <br/>&#10022 Continuously improve based on feedback <br/>&#10022 Develop marketing strategy",
      },
      q2_2023: {
        title: "Q2 2023",
        title_second: "Website & Product Launch and Testing",
        content:
          "&#10022 Launch website, Swap feature<br/>&#10022 Gather user feedback, analyze response<br/>&#10022Implement necessary improvements",
      },
      q3_2023: {
        title: "Q3 2023",
        title_second: "Release Liquidity Feature",
        content:
          "&#10022 Introduce liquidity provision functionality <br/>&#10022 Establish partnerships with providers, projects<br/>&#10022 Implement Perpetual feature<br/>&#10022 Conduct security audits",
      },
      q4_2023: {
        title: "Q4 2023",
        title_second: "Develop other features & Platform Enhancements",
        content:
          "&#10022 Launch Staking and Farming Features <br/>&#10022 Continuously enhance based on feedback  <br/>&#10022 Optimize security measures<br/>&#10022 Improve user experience, interface",
      },
      q1_2024: {
        title: "Q1 2024",
        title_second: "Expansion of Trading Services",
        content:
          "&#10022 Expand spot and futures markets<br/>&#10022 Introduce advanced features, tools<br/>&#10022 Enhance scalability, performance<br/>&#10022 Enable cross-platform trading",
      },
      q2_2024: {
        title: "Q2 2024",
        title_second: "Release Toptrader Feature",
        content:
          "&#10022 Launch Toptrader feature<br/>&#10022 Enable professional tools, analysis<br/>&#10022 Improve user interface<br/>&#10022 Conduct marketing campaigns",
      },
      q3_2024: {
        title: "Q3 2024",
        title_second: "Mobile Application and Wallet Integration",
        content:
          "&#10022 Launch mobile application<br/>&#10022 Integrate with decentralized wallets<br/>&#10022 Optimize mobile trading experience<br/>&#10022 Increase accessibility",
      },
      q4_2024: {
        title: "Q4 2024",
        title_second: "Community Growth and Global Expansion",
        content:
          "&#10022 Grow community through targeted marketing<br/>&#10022 Collaborate with influencers, experts<br/>&#10022 Launch regional marketing initiatives<br/>&#10022 Explore global expansion, partnerships",
      },
    },
  },
  v = Object.freeze(
    Object.defineProperty({ __proto__: null, default: b }, Symbol.toStringTag, {
      value: "Module",
    })
  ),
  _ = { name: "Support" },
  w = Object.freeze(
    Object.defineProperty({ __proto__: null, default: _ }, Symbol.toStringTag, {
      value: "Module",
    })
  );
const k = {
  "./en/layout.ts": y,
  "./en/routes/about.ts": g,
  "./en/routes/home.ts": v,
  "./en/routes/support.ts": w,
};
var P = {
  message: r(a({}, p(k, "en")), { antdLocale: m }),
  dateLocale: null,
  dateLocaleName: "en",
};
export { P as default };
