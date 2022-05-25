const docs = {
    "rows":[{
        filename:"Complaint Management process",
        Year:"2022",
        Status:"Requested",
        Project_text:"ICH Mainz",
        url:[{size: 10486, name: "Complaint Management process.xlsx"}]
    },
    {
        filename:"test1",
        Year:"2022",
        Status:"Uploaded",
        Project_text:"ICH Mainz",
        url:[{size: 10486, name: "Complaint Management process.xlsx"}]
    },
    {
        filename:"test2",
        Year:"2022",
        Status:"Uploaded",
        Project_text:"Hotel 2",
        url:[{size: 10486, name: "Complaint Management process.xlsx"}]
    },
    {
        filename:"test1",
        Year:"2022",
        Status:"New",
        Project_text:"ICH Mainz",
        url:[]
    },
    {
        filename:"test4",
        Year:"2022",
        Status:"Uploaded",
        Project_text:"Hotel 2",
        url:[]
    },
    {
        filename:"test1",
        Year:"2022",
        Status:"Uploaded",
        Project_text:"ICH Mainz",
        url:[]
    }]
};


function detectFiles (documents, nameGroup) {
    const filesArray = documents.rows;
    let result = "";
    let newArray = filesArray.filter((f) => f.filename == nameGroup);
    let resultArray = newArray.filter((f) => f.url.length > 0);
    console.log(resultArray);
    if (resultArray.length > 0) {
        result = true;
    }
    console.log(result);
    return result;
}

detectFiles (docs, "test1");



function delOtherFiles (documents, nameGroup) {
    const filesArray = documents.rows;
    let newArray = filesArray.filter((f) => f.filename == nameGroup);
    
    let resultArray = newArray.map((f) => f.Status == "Uploaded");
    console.log(resultArray);
    let result = resultArray.every((f) => f == true);
    console.log(result);
    return result;
}

delOtherFiles(docs, "test1");

const elements = [{
    "_id":"ro_ta_c71b594a6a094f808bd0a729e36abef6_e817c3e240894959882c0154e0b42e0a",
    "_rev":"4-86498a7a613630f517fb4d412f308aa8",
    "filename":"Diversity policies",
    "Description":"Please provide the Diversity policies documents ASAP.",
    "url":[],
    "Year":"2022",
    "Status":"Completed",
    "tableId":"ta_c71b594a6a094f808bd0a729e36abef6",
    "Auto ID":189,
    "Created At":"2022-05-06T01:10:03.661Z",
    "Updated At":"2022-05-06T11:20:22.874Z",
    "type":"row",
    "Project":[{"_id":"ro_ta_7203b6ddf4c8442893974734b61f1e0b_05a760b996da4ff3a1024de673e9d796","primaryDisplay":"IntercityHotel Berlin Airport"}],
    "Project Prefix":"IntercityHotel Berlin Airport",
    "url_first":null,
    "Project_text":"IntercityHotel Berlin Airport"
}];

const files = [{
    "size":10486,
    "name":"Complaint Management process.xlsx",
    "url":"https://cdn.budi.live/app_crs_b030c8d20bc74763ba8477e65a8cb27f/attachments/58cec5f1-7a6e-4639-be7e-3660733782ca.xlsx",
    "extension":"xlsx",
    "key":"app_crs_b030c8d20bc74763ba8477e65a8cb27f/attachments/58cec5f1-7a6e-4639-be7e-3660733782ca.xlsx"
},
{
    "size":10486,
    "name":"Complaint Management process Berlin Airport.xlsx",
    "url":"https://cdn.budi.live/app_crs_b030c8d20bc74763ba8477e65a8cb27f/attachments/a6a3ec52-2dfa-41ad-96a2-50f81ba3ae5b.xlsx",
    "extension":"xlsx",
    "key":"app_crs_b030c8d20bc74763ba8477e65a8cb27f/attachments/a6a3ec52-2dfa-41ad-96a2-50f81ba3ae5b.xlsx"
}];