const uuidlib= require('uuid');
  
function generateId() {
	        return uuidlib.v3('qrQtuIR4XN', uuidlib.v4());
	}

module.exports = generateId
