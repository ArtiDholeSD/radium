# radium
Repository for backend cohort - Radium
 const filterQuery = {isDeleted :false  }
       
        const queryParam = req.query
     
        if(!isValidRequestBody(queryParam)){
        res
          .status(400)
          .send({ status: false, msg: "No query param received" });
        return;
      }
      
        const name1 = req.query.collegeName
        if(isValid(name1)){
          filterQuery['name'] = name1      
        }