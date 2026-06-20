export interface Version {
  version: string;
  beta: boolean;
  date: string;
  size: string;
}

export interface Download {
  name: string;
  url: string;
  password?: string;
}

export interface MCBEListResponse {
  code: number;
  data: {
    total: number;
    versions: Version[];
  };
}

export interface MCBEDownloadResponse {
  code: number;
  data: {
    data: {
      downloads: Download[];
    };
  };
}

export interface FCLAsset {
  name: string;
  size: number;
  content_type: string;
  download_url: string;
}

export interface FCLVersion {
  name: string;
  github_url: string;
  created_at: string;
  updated_at: string;
  assets_files: FCLAsset[];
}

export interface FCLVersionListResponse {
  last_updated_at: string;
  create_at: string;
  'data_re-fetch_at': string;
  versions: FCLVersion[];
}

export type SortMode = 'newest' | 'beta_first' | 'stable_first';

export type Lang = 'en' | 'zh' | 'ja' | 'ko';

export type LocaleKey =
  | 'nav_home'
  | 'nav_mcbe'
  | 'nav_fcl'
  | 'nav_pcl'
  | 'home_title'
  | 'home_subtitle'
  | 'home_desc_mcbe'
  | 'home_desc_fcl'
  | 'home_desc_pcl'
  | 'home_cta_mcbe'
  | 'home_cta_fcl'
  | 'home_cta_pcl'
  | 'mcbe_title'
  | 'mcbe_total'
  | 'mcbe_beta'
  | 'mcbe_stable'
  | 'mcbe_download'
  | 'mcbe_v8a'
  | 'mcbe_v7a'
  | 'mcbe_loading_dl'
  | 'mcbe_dl_success'
  | 'mcbe_dl_fail'
  | 'mcbe_loading_list'
  | 'fcl_title'
  | 'fcl_loading'
  | 'fcl_download'
  | 'fcl_arch_all'
  | 'fcl_arch_v8a'
  | 'fcl_arch_v7a'
  | 'fcl_arch_x86'
  | 'fcl_arch_x64'
  | 'pcl_title'
  | 'pcl_desc'
  | 'pcl_link'
  | 'sort_newest'
  | 'sort_beta_first'
  | 'sort_stable_first'
  | 'footer_built'
  | 'footer_mcbe_api'
  | 'footer_fcl_api'
  | 'nav_netease'
  | 'home_desc_netease'
  | 'home_cta_netease'
  | 'netease_title'
  | 'netease_desc'
  | 'netease_link'
  | 'not_found';
