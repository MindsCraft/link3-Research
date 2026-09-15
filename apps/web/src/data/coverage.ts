export interface CoverageLocation {
  id: string;
  building: string;
  street: string;
  postcode: string;
  city: string;
  state: string;
  maxSpeed: string;
  isCovered: boolean;
}

export const sampleCoverageList: CoverageLocation[] = [
  {
    id: 'cov-1',
    building: 'The Horizon Residences',
    street: 'Jalan Tun Razak',
    postcode: '50400',
    city: 'Kuala Lumpur',
    state: 'Wilayah Persekutuan',
    maxSpeed: '2 Gbps',
    isCovered: true,
  },
  {
    id: 'cov-2',
    building: 'Menara Pinnacle',
    street: 'Persiaran Lagoon, Bandar Sunway',
    postcode: '47500',
    city: 'Petaling Jaya',
    state: 'Selangor',
    maxSpeed: '2 Gbps',
    isCovered: true,
  },
  {
    id: 'cov-3',
    building: 'South View Serviced Apartments',
    street: 'Bangsar South',
    postcode: '59200',
    city: 'Kuala Lumpur',
    state: 'Wilayah Persekutuan',
    maxSpeed: '1 Gbps',
    isCovered: true,
  },
  {
    id: 'cov-4',
    building: 'Gurney Paragon Condominium',
    street: 'Persiaran Gurney',
    postcode: '10250',
    city: 'Georgetown',
    state: 'Penang',
    maxSpeed: '2 Gbps',
    isCovered: true,
  },
  {
    id: 'cov-5',
    building: 'Skyline Residences JB',
    street: 'Jalan Ibrahim Sultan',
    postcode: '80300',
    city: 'Johor Bahru',
    state: 'Johor',
    maxSpeed: '1 Gbps',
    isCovered: true,
  },
];
