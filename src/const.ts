export const MyCareer: {
  [k: string]: {
    [k: string]: string[],
  }
} = {
  '2025': {
    '5': ['다겸 퇴사'],
  },
  "2024": {
    "9": ["의류 쇼핑몰 앱 소코드레스 서비스 런칭"],
  },
  "2023": {
    "9": ["소개팅 어플리케이션 더핏럽 서비스 런칭"],
    "4": ["마이필 서비스 런칭"],
    "2": ["소코드레스 앱 IOS 심사 통과 앱 배포"]
  },
  "2022": {
    "11": ["재난관리 앱 UBIS Call 앱 개발 착수"],
    "9": ["쇼핑몰 앱 소코드레스 앱 개발 착수"],
    "5": ["다겸 데이터바우처 사업 2건 개발 착수 (마이필, 로우택스)"],
    "2": ["MrCEO, MrCEO Lab 서비스런칭"]
  },
  "2021": {
    "12": ["데이터바우처 사업 2건 추가 개발 착수 (디블, D3)"],
    "9": ["다겸 데이터바우처 사업 2건 개발 착수 (비즈블, 지금, 기분)"],
    "1": ["한국콘크리트산업 소개페이지 개발 완료"]
  },
  "2020": {
    "8": ["다겸 입사"],
    "4": ["안양다락방, 리버스이스케이프 방탈출카페 서비스 런칭"],
    "3": ["FM 테크놀로지 퇴사"]
  },
  "2019": {
    "6": ["FM 더 라운즈 블록체인 기반 인플루언서 플랫폼 개발"],
    "5": ["해피인사이드 홈페이지 및 자동 예약시스템 개발"]
  },
  "2018": {
    "5": ["FM 테크놀로지 입사"],
    "1": ["씨메스 퇴사"]
  },
  "2017": {
    "2": ["씨메스 입사", "한성대학교 졸업"]
  },
  "2011": {
    "3": ["한성대학교 공학계열 정보통신공학과 입학 "]
  }
};

export const MyPortfolios = {
  mainProjects: [{
    title: "마이필",
    logo: "https://www.mypill.co.kr/images/MYPILL_logo.png",
    introImage: `https://raw.githubusercontent.com/ksw7581/kswWebsite/master/src/images/mrceoIntro.png`,
    contents: "나에게 맞는 영양제 그리고 내게 필요한 영양소를 간단한 자가진단과 건강검진 자료를 통해서 파악할 수 있는 홈페이지입니다.",
    url: "https://www.mypill.co.kr/"
  }, {
    title: "미스터씨이오",
    logo: "https://www.mrceo.co.kr/src/images/logo.png",
    introImage: `https://raw.githubusercontent.com/ksw7581/kswWebsite/master/src/images/mypillIntro.png`,
    contents: "병의원 재무상태표 및 손익분석표 데이터와 홈택스 여신협회 신용카드 계좌이체 내역만으로 손익분석을 비교 대조 가능하게 해주는 서비스입니다. ",
    url: "https://www.mrceo.co.kr/"
  }, {
    title: "VInterview",
    logo: "https://www.ozic.com/static/media/icon_logo_pu.fd1194c5.svg",
    introImage: `https://raw.githubusercontent.com/ksw7581/kswWebsite/master/src/images/VInterviewIntro.png`,
    contents: "사용자의 직무와 학력 수상경력 등의 이력정보를 바탕으로 지원하고자 하는 기업의 예상 면접 질문을 받아볼 수 있는 플랫폼입니다.",
    url: "https://www.ozic.com/vinterview"
  }]
};

export const MySkills: {
  editor: {
    [key: string]: {
      url: string;
    },
  },
  versionControl: {
    [key: string]: {
      url: string;
    },
  },
  restapi: {
    [key: string]: {
      url: string;
    },
  },
  language: {
    [key: string]: {
      url: string;
    },
  },
  react: {
    [key: string]: {
      url: string;
    },
  },
  nodejs: {
    [key: string]: {
      url: string;
    },
  },
  databases: {
    [key: string]: {
      url: string;
    },
  },
} = {
  editor: {
    webstorm: {
      url: "https://www.jetbrains.com/webstorm/"
    }
  },
  versionControl: {
    git: {
      url: "https://git-scm.com"
    }
  },
  restapi: {
    postman: {
      url: "https://www.postman.com"
    },
    oauth: {
      url: "https://oauth.net/2"
    }
  },
  language: {
    typescript: {
      url: "https://www.typescriptlang.org"
    }
  },
  react: {
    recoil: {
      url: "https://recoiljs.org"
    },
    immer: {
      url: "https://github.com/immerjs/immer"
    },
    "react-router-dom": {
      url: "https://reactrouter.com/en/main"
    },
    highchart: {
      url: "https://www.highcharts.com"
    },
    webpack: {
      url: "https://webpack.kr/"
    },
    react_native : {
      url: "https://reactnative.dev"
    },
    tailwind_css : {
      url: "https://tailwindcss.com/"
    },
  },
  nodejs: {
    express: {
      url: "https://expressjs.com/"
    },
    sequelize: {
      url: "https://sequelize.org/"
    },
    prisma : {
      url: "https://www.prisma.io/"
    },
    multer: {
      url: "https://github.com/expressjs/multer#readme"
    },
    awsS3: {
      url: "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-s3"
    },
    passport: {
      url: "https://www.passportjs.org/"
    },
    greenlock: {
      url: "https://git.rootprojects.org/root/greenlock.js.git"
    },
    nodemailer: {
      url: "https://nodemailer.com/about/"
    },
    nest_js: {
      url: "https://nestjs.com/"
    },
  },
  databases: {
    mysql: {
      url: "https://www.mysql.com/"
    },
    mongodb: {
      url: "https://www.mongodb.com/"
    },
    postgre_sql: {
      url: "https://www.postgresql.org/"
    },
  }
};
