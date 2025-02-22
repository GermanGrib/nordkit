interface SingleRegion {
  subdomain: string;
  city_name: string;
  city_name_vp: string;
  city_name_rp: string;
  city_name_rp2: string;
  branches: BranchInterface[];
}

interface BranchInterface {
  index_google_map: string;
  address: string;
  phone: string;
  time_work: string;
  time_work2: string;
  coordinates: string;
}

export type { SingleRegion };
