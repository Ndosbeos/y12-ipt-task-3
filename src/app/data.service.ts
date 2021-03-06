import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
hsc = [];
  constructor() { 
    if (localStorage.hsc == null) {
      localStorage.setItem("hsc", JSON.stringify(this.hscpapers));
    }
  }
hscpapers = [
  {},
  {},
  {},
  {
    year:2003,
    src:"https://educationstandards.nsw.edu.au/wps/wcm/connect/35694663-82bf-445d-8f87-03bcf4fdae40/ipt-hsc-exam-2003.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-35694663-82bf-445d-8f87-03bcf4fdae40-nbDp1l7",
    guide:"https://educationstandards.nsw.edu.au/wps/wcm/connect/7e9aba7c-f089-4626-8550-5c2580f4c1dd/ipt-hsc-notes-2003.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-7e9aba7c-f089-4626-8550-5c2580f4c1dd-nbDp1l7",
    sample:null
  },
  {
    year:2004,
    src:"https://educationstandards.nsw.edu.au/wps/wcm/connect/307d97f2-a6df-47f6-b4b9-87e8faff071c/ipt-hsc-exam-2004.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-307d97f2-a6df-47f6-b4b9-87e8faff071c-nbDp1l7",
    guide:"https://educationstandards.nsw.edu.au/wps/wcm/connect/f43db86a-03b6-472e-bc4d-ebc240ee0443/ipt-hsc-notes-2004.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-f43db86a-03b6-472e-bc4d-ebc240ee0443-nbDp1l7",
    sample:null,
  },
  {
    year:2005,
    src:"https://educationstandards.nsw.edu.au/wps/wcm/connect/2ad9328a-c75f-488a-aedc-8c70b5d892f7/ipt-hsc-exam-2005.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-2ad9328a-c75f-488a-aedc-8c70b5d892f7-nbDp1l7",
    guide:"https://educationstandards.nsw.edu.au/wps/wcm/connect/8ee5d07f-9ff4-439d-ae3c-cc49c0ceb501/ipt-hsc-notes-2005.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-8ee5d07f-9ff4-439d-ae3c-cc49c0ceb501-nbDp1l7",
    sample:null,
  },
  {
    year:2006,
    src:"https://educationstandards.nsw.edu.au/wps/wcm/connect/9238baaf-3f94-4bc9-bb2e-b52a0a9b7fc7/ipt-hsc-exam-2006.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-9238baaf-3f94-4bc9-bb2e-b52a0a9b7fc7-nbDp1l7",
    guide:"https://educationstandards.nsw.edu.au/wps/wcm/connect/955a88a3-e924-48d9-8554-fb43baeebca7/ipt-hsc-notes-2006.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-955a88a3-e924-48d9-8554-fb43baeebca7-nbDp1l7",
    sample:null,
  },
  {
    year:2007,
    src:"https://educationstandards.nsw.edu.au/wps/wcm/connect/9d29ac82-0f37-4224-aa12-cfaec5605a45/ipt-hsc-exam-2007.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-9d29ac82-0f37-4224-aa12-cfaec5605a45-nbDp1l7",
    guide:"https://educationstandards.nsw.edu.au/wps/wcm/connect/20acb894-07d1-4f9d-8c39-276fe6f78bd2/ipt-hsc-notes-2007.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-20acb894-07d1-4f9d-8c39-276fe6f78bd2-nbDp1l7",
    sample:null,
  },
  {
    year:2008,
    src:"https://educationstandards.nsw.edu.au/wps/wcm/connect/420e79af-9942-4d60-9a48-0fcc17f5732e/ipt-hsc-exam-2008.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-420e79af-9942-4d60-9a48-0fcc17f5732e-nbDp1l7",
    guide:"https://educationstandards.nsw.edu.au/wps/wcm/connect/afcf8e9c-07b3-4126-b34f-2395b69de0c5/ipt-hsc-notes-2008.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-afcf8e9c-07b3-4126-b34f-2395b69de0c5-nbDp1l7",
    sample:null,
  },
  {
    year:2009,
    src:"https://educationstandards.nsw.edu.au/wps/wcm/connect/beb9c555-f919-476d-b1cd-cd433f391edb/ipt-hsc-exam-2009.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-beb9c555-f919-476d-b1cd-cd433f391edb-nbDp1l7",
    guide:"https://educationstandards.nsw.edu.au/wps/wcm/connect/0cfb5d24-e72f-4926-8d60-5410ba1c30e2/ipt-hsc-mg-2009.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-0cfb5d24-e72f-4926-8d60-5410ba1c30e2-nbDp1l7",
    sample:"https://educationstandards.nsw.edu.au/wps/wcm/connect/545a4d73-c42e-463f-b3d1-d8a6cfe4f315/ipt-hsc-sa-2009.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-545a4d73-c42e-463f-b3d1-d8a6cfe4f315-nbDp1l7",
  },
  {
    year:2010,
    src:"https://educationstandards.nsw.edu.au/wps/wcm/connect/3317ecc4-dbdd-4413-9830-7887ad027c1c/ipt-hsc-exam-2010.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-3317ecc4-dbdd-4413-9830-7887ad027c1c-nbDp1l7",
    guide:"https://educationstandards.nsw.edu.au/wps/wcm/connect/9577b531-4efd-4c32-834c-749d25ffdba1/ipt-hsc-mg-2010.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-9577b531-4efd-4c32-834c-749d25ffdba1-nbDp1l7",
    sample:"https://educationstandards.nsw.edu.au/wps/wcm/connect/9c9eebc7-3830-4520-9ddf-612a017901d0/ipt-hsc-sa-2010.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-9c9eebc7-3830-4520-9ddf-612a017901d0-nbDp1l7",
  },
  {
    year:2011,
    src:"https://educationstandards.nsw.edu.au/wps/wcm/connect/d2a7b59d-82ef-4af7-821a-bb6b61c4dd6f/ipt-hsc-exam-2011.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-d2a7b59d-82ef-4af7-821a-bb6b61c4dd6f-nbDp1l7",
    guide:"https://educationstandards.nsw.edu.au/wps/wcm/connect/740e2455-20c9-4875-9e44-a27af5394aa3/ipt-hsc-mg-2011.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-740e2455-20c9-4875-9e44-a27af5394aa3-nbDp1l7",
    sample:"https://educationstandards.nsw.edu.au/wps/wcm/connect/3f9e5700-c1e8-4dd1-89b0-115b4b427b9b/ipt-hsc-sa-2011.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-3f9e5700-c1e8-4dd1-89b0-115b4b427b9b-nbDp1l7",
  },
  {
    year:2012,
    src:"https://educationstandards.nsw.edu.au/wps/wcm/connect/f7b765d8-94fe-44a6-be6f-bda68ac38663/ipt-hsc-exam-2012.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-f7b765d8-94fe-44a6-be6f-bda68ac38663-nbDp1l7",
    guide:"https://educationstandards.nsw.edu.au/wps/wcm/connect/1f043705-ab52-4d1a-adb5-e360c6a5334a/ipt-hsc-mg-2012.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-1f043705-ab52-4d1a-adb5-e360c6a5334a-nbDp1l7",
    sample:"https://educationstandards.nsw.edu.au/wps/wcm/connect/a2fe501a-c2e7-4459-b93f-fc680ad55ac6/ipt-hsc-sa-2012.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-a2fe501a-c2e7-4459-b93f-fc680ad55ac6-nbDp1l7",
  },
  {
    year:2013,
    src:"https://educationstandards.nsw.edu.au/wps/wcm/connect/87056a79-0c17-49ef-abde-0bdb0e1d5d18/ipt-hsc-exam-2013.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-87056a79-0c17-49ef-abde-0bdb0e1d5d18-nbDp1l7",
    guide:"https://educationstandards.nsw.edu.au/wps/wcm/connect/92b6d93d-33ae-4d3e-b63f-576c7aba76d2/ipt-hsc-mg-2013.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-92b6d93d-33ae-4d3e-b63f-576c7aba76d2-nbDp1l7",
    sample:null,
  },
  {
    year:2014,
    src:"https://educationstandards.nsw.edu.au/wps/wcm/connect/284d30a3-3fe6-4b4f-a038-dd3dc894c72a/ipt-hsc-exam-2014.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-284d30a3-3fe6-4b4f-a038-dd3dc894c72a-nbDp1l7",
    guide:"https://educationstandards.nsw.edu.au/wps/wcm/connect/a1ca3b1f-1b4d-4e06-a5c2-de2dffa91d2b/ipt-hsc-mg-2014.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-a1ca3b1f-1b4d-4e06-a5c2-de2dffa91d2b-nbDp1l7",
    sample:null,
  },
  {
    year:2015,
    src:"https://educationstandards.nsw.edu.au/wps/wcm/connect/0ad8b3bc-87b4-4867-9931-3e21fe5e6960/ipt-hsc-exam-2015.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-0ad8b3bc-87b4-4867-9931-3e21fe5e6960-nbDp1l7",
    guide:"https://educationstandards.nsw.edu.au/wps/wcm/connect/31912e7d-d560-4ff2-8cb6-8218d35b8d2c/ipt-hsc-mg-2015.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-31912e7d-d560-4ff2-8cb6-8218d35b8d2c-nbDp1l7",
    sample:null,
  },
{
    year:2016,
    src:"https://educationstandards.nsw.edu.au/wps/wcm/connect/4f7d70bc-f48e-4bc2-9d10-ba0044432d40/2016-hsc-ipt.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-4f7d70bc-f48e-4bc2-9d10-ba0044432d40-nbDp1l7",
    guide:"https://educationstandards.nsw.edu.au/wps/wcm/connect/2374f056-3c74-454d-a494-a678ae6b03cf/2016-hsc-mg-ipt.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-2374f056-3c74-454d-a494-a678ae6b03cf-nbDp1l7",
    sample:null,
  },
  {
    year:2017,
    src:"https://educationstandards.nsw.edu.au/wps/wcm/connect/683708fb-6b5f-4e8b-9d66-a1e28b170f68/2017-hsc-ipt.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-683708fb-6b5f-4e8b-9d66-a1e28b170f68-nbDp1l7",
    guide:"https://educationstandards.nsw.edu.au/wps/wcm/connect/94cba97f-1b33-4e78-93ab-fe7f75d92851/2017-hsc-mg-ipt.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-94cba97f-1b33-4e78-93ab-fe7f75d92851-nbDp1l7",
    sample:null,
  },
  {
    year:2018,
    src:"https://educationstandards.nsw.edu.au/wps/wcm/connect/6f5008f1-b580-4293-8d4c-1e54bf7e75ec/2018-hsc-ipt.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-6f5008f1-b580-4293-8d4c-1e54bf7e75ec-nbDp1l7",
    guide:"https://educationstandards.nsw.edu.au/wps/wcm/connect/7c36c7b0-a69b-4929-b0fa-260ed71381ab/2018-hsc-ipt-mg.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-7c36c7b0-a69b-4929-b0fa-260ed71381ab-nbDp1l7",
    sample:null,
  },
  {
    year:2019,
    src:"https://educationstandards.nsw.edu.au/wps/wcm/connect/a2b693c9-2a2a-4a5c-aacb-588c1bf45423/2019-hsc-ipt.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-a2b693c9-2a2a-4a5c-aacb-588c1bf45423-nbDp1l7",
    guide:null,
    sample:null,
  },
  {
    year:2020,
    src:"https://educationstandards.nsw.edu.au/wps/wcm/connect/54777afb-7c9b-44da-9051-7033848c0b27/2020-hsc-information-processes-and-technology.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-54777afb-7c9b-44da-9051-7033848c0b27-nmVNxTo",
    guide:"https://educationstandards.nsw.edu.au/wps/wcm/connect/9fe5dead-a3a1-4d0d-926a-89fcbbb00b25/2019-hsc-information-processes-and-technology-mg.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-9fe5dead-a3a1-4d0d-926a-89fcbbb00b25-nbDp1l7",
    sample:null,
  }
]
  getRecordNotice(id) {
    let data = JSON.parse(localStorage.getItem("hsc"));
    let employee = data[id];
    return employee;
  }
}