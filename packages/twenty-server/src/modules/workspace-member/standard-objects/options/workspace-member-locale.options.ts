import { FieldMetadataComplexOption } from 'src/engine/metadata-modules/field-metadata/dtos/options.input';

export enum WorkspaceMemberLocaleEnum {
  AF_ZA = 'AF_ZA',
  AM_ET = 'AM_ET',
  AR_AE = 'AR_AE',
  AR_BH = 'AR_BH',
  AR_DZ = 'AR_DZ',
  AR_EG = 'AR_EG',
  AR_IQ = 'AR_IQ',
  AR_JO = 'AR_JO',
  AR_KW = 'AR_KW',
  AR_LB = 'AR_LB',
  AR_LY = 'AR_LY',
  AR_MA = 'AR_MA',
  ARN_CL = 'ARN_CL',
  AR_OM = 'AR_OM',
  AR_QA = 'AR_QA',
  AR_SA = 'AR_SA',
  AR_SD = 'AR_SD',
  AR_SY = 'AR_SY',
  AR_TN = 'AR_TN',
  AR_YE = 'AR_YE',
  AS_IN = 'AS_IN',
  AZ_AZ = 'AZ_AZ',
  AZ_CYRL_AZ = 'AZ_CYRL_AZ',
  AZ_LATN_AZ = 'AZ_LATN_AZ',
  BA_RU = 'BA_RU',
  BE_BY = 'BE_BY',
  BG_BG = 'BG_BG',
  BN_BD = 'BN_BD',
  BN_IN = 'BN_IN',
  BO_CN = 'BO_CN',
  BR_FR = 'BR_FR',
  BS_CYRL_BA = 'BS_CYRL_BA',
  BS_LATN_BA = 'BS_LATN_BA',
  CA_ES = 'CA_ES',
  CO_FR = 'CO_FR',
  CS_CZ = 'CS_CZ',
  CY_GB = 'CY_GB',
  DA_DK = 'DA_DK',
  DE_AT = 'DE_AT',
  DE_CH = 'DE_CH',
  DE_DE = 'DE_DE',
  DE_LI = 'DE_LI',
  DE_LU = 'DE_LU',
  DSB_DE = 'DSB_DE',
  DV_MV = 'DV_MV',
  EL_CY = 'EL_CY',
  EL_GR = 'EL_GR',
  EN_029 = 'EN_029',
  EN_AU = 'EN_AU',
  EN_BZ = 'EN_BZ',
  EN_CA = 'EN_CA',
  EN_CB = 'EN_CB',
  EN_GB = 'EN_GB',
  EN_IE = 'EN_IE',
  EN_IN = 'EN_IN',
  EN_JM = 'EN_JM',
  EN_MT = 'EN_MT',
  EN_MY = 'EN_MY',
  EN_NZ = 'EN_NZ',
  EN_PH = 'EN_PH',
  EN_SG = 'EN_SG',
  EN_TT = 'EN_TT',
  EN_US = 'EN_US',
  EN_ZA = 'EN_ZA',
  EN_ZW = 'EN_ZW',
  ES_AR = 'ES_AR',
  ES_BO = 'ES_BO',
  ES_CL = 'ES_CL',
  ES_CO = 'ES_CO',
  ES_CR = 'ES_CR',
  ES_DO = 'ES_DO',
  ES_EC = 'ES_EC',
  ES_ES = 'ES_ES',
  ES_GT = 'ES_GT',
  ES_HN = 'ES_HN',
  ES_MX = 'ES_MX',
  ES_NI = 'ES_NI',
  ES_PA = 'ES_PA',
  ES_PE = 'ES_PE',
  ES_PR = 'ES_PR',
  ES_PY = 'ES_PY',
  ES_SV = 'ES_SV',
  ES_US = 'ES_US',
  ES_UY = 'ES_UY',
  ES_VE = 'ES_VE',
  ET_EE = 'ET_EE',
  EU_ES = 'EU_ES',
  FA_IR = 'FA_IR',
  FI_FI = 'FI_FI',
  FIL_PH = 'FIL_PH',
  FO_FO = 'FO_FO',
  FR_BE = 'FR_BE',
  FR_CA = 'FR_CA',
  FR_CH = 'FR_CH',
  FR_FR = 'FR_FR',
  FR_LU = 'FR_LU',
  FR_MC = 'FR_MC',
  FY_NL = 'FY_NL',
  GA_IE = 'GA_IE',
  GD_GB = 'GD_GB',
  GD_IE = 'GD_IE',
  GL_ES = 'GL_ES',
  GSW_FR = 'GSW_FR',
  GU_IN = 'GU_IN',
  HA_LATN_NG = 'HA_LATN_NG',
  HE_IL = 'HE_IL',
  HI_IN = 'HI_IN',
  HR_BA = 'HR_BA',
  HR_HR = 'HR_HR',
  HSB_DE = 'HSB_DE',
  HU_HU = 'HU_HU',
  HY_AM = 'HY_AM',
  ID_ID = 'ID_ID',
  IG_NG = 'IG_NG',
  II_CN = 'II_CN',
  IN_ID = 'IN_ID',
  IS_IS = 'IS_IS',
  IT_CH = 'IT_CH',
  IT_IT = 'IT_IT',
  IU_CANS_CA = 'IU_CANS_CA',
  IU_LATN_CA = 'IU_LATN_CA',
  IW_IL = 'IW_IL',
  JA_JP = 'JA_JP',
  KA_GE = 'KA_GE',
  KK_KZ = 'KK_KZ',
  KL_GL = 'KL_GL',
  KM_KH = 'KM_KH',
  KN_IN = 'KN_IN',
  KOK_IN = 'KOK_IN',
  KO_KR = 'KO_KR',
  KY_KG = 'KY_KG',
  LB_LU = 'LB_LU',
  LO_LA = 'LO_LA',
  LT_LT = 'LT_LT',
  LV_LV = 'LV_LV',
  MI_NZ = 'MI_NZ',
  MK_MK = 'MK_MK',
  ML_IN = 'ML_IN',
  MN_MN = 'MN_MN',
  MN_MONG_CN = 'MN_MONG_CN',
  MOH_CA = 'MOH_CA',
  MR_IN = 'MR_IN',
  MS_BN = 'MS_BN',
  MS_MY = 'MS_MY',
  MT_MT = 'MT_MT',
  NB_NO = 'NB_NO',
  NE_NP = 'NE_NP',
  NL_BE = 'NL_BE',
  NL_NL = 'NL_NL',
  NN_NO = 'NN_NO',
  NO_NO = 'NO_NO',
  NSO_ZA = 'NSO_ZA',
  OC_FR = 'OC_FR',
  OR_IN = 'OR_IN',
  PA_IN = 'PA_IN',
  PL_PL = 'PL_PL',
  PRS_AF = 'PRS_AF',
  PS_AF = 'PS_AF',
  PT_BR = 'PT_BR',
  PT_PT = 'PT_PT',
  QUT_GT = 'QUT_GT',
  QUZ_BO = 'QUZ_BO',
  QUZ_EC = 'QUZ_EC',
  QUZ_PE = 'QUZ_PE',
  RM_CH = 'RM_CH',
  RO_MO = 'RO_MO',
  RO_RO = 'RO_RO',
  RU_MO = 'RU_MO',
  RU_RU = 'RU_RU',
  RW_RW = 'RW_RW',
  SAH_RU = 'SAH_RU',
  SA_IN = 'SA_IN',
  SE_FI = 'SE_FI',
  SE_NO = 'SE_NO',
  SE_SE = 'SE_SE',
  SI_LK = 'SI_LK',
  SK_SK = 'SK_SK',
  SL_SI = 'SL_SI',
  SMA_NO = 'SMA_NO',
  SMA_SE = 'SMA_SE',
  SMJ_NO = 'SMJ_NO',
  SMJ_SE = 'SMJ_SE',
  SMN_FI = 'SMN_FI',
  SMS_FI = 'SMS_FI',
  SQ_AL = 'SQ_AL',
  SR_BA = 'SR_BA',
  SR_CS = 'SR_CS',
  SR_CYRL_BA = 'SR_CYRL_BA',
  SR_CYRL_CS = 'SR_CYRL_CS',
  SR_CYRL_ME = 'SR_CYRL_ME',
  SR_CYRL_RS = 'SR_CYRL_RS',
  SR_LATN_BA = 'SR_LATN_BA',
  SR_LATN_CS = 'SR_LATN_CS',
  SR_LATN_ME = 'SR_LATN_ME',
  SR_LATN_RS = 'SR_LATN_RS',
  SR_ME = 'SR_ME',
  SR_RS = 'SR_RS',
  SR_SP = 'SR_SP',
  SV_FI = 'SV_FI',
  SV_SE = 'SV_SE',
  SW_KE = 'SW_KE',
  SYR_SY = 'SYR_SY',
  TA_IN = 'TA_IN',
  TE_IN = 'TE_IN',
  TG_CYRL_TJ = 'TG_CYRL_TJ',
  TH_TH = 'TH_TH',
  TK_TM = 'TK_TM',
  TLH_QS = 'TLH_QS',
  TN_ZA = 'TN_ZA',
  TR_TR = 'TR_TR',
  TT_RU = 'TT_RU',
  TZM_LATN_DZ = 'TZM_LATN_DZ',
  UG_CN = 'UG_CN',
  UK_UA = 'UK_UA',
  UR_PK = 'UR_PK',
  UZ_CYRL_UZ = 'UZ_CYRL_UZ',
  UZ_LATN_UZ = 'UZ_LATN_UZ',
  UZ_UZ = 'UZ_UZ',
  VI_VN = 'VI_VN',
  WO_SN = 'WO_SN',
  XH_ZA = 'XH_ZA',
  YO_NG = 'YO_NG',
  ZH_CN = 'ZH_CN',
  ZH_HK = 'ZH_HK',
  ZH_MO = 'ZH_MO',
  ZH_SG = 'ZH_SG',
  ZH_TW = 'ZH_TW',
  ZU_ZA = 'ZU_ZA',
}

export const workspaceMemberLocaleOptions: FieldMetadataComplexOption[] =
  Object.keys(WorkspaceMemberLocaleEnum).map((key, index) => {
    return {
      value: WorkspaceMemberLocaleEnum[key],
      label: WorkspaceMemberLocaleEnum[key],
      position: index,
      color: 'Grey',
    } as FieldMetadataComplexOption;
  });