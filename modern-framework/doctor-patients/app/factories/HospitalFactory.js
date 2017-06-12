 "use strict";

app.factory("HospitalFactory", ($q, $http, FBCreds) => {

	let getDoctorList = (user) => {

		return $q((resolve, reject) => {
		
			$http.get(`${FBCreds.databaseURL}/doctors.json`)
			.then((itemObject) => {
				let doctorTypes = [];
				let doctorList = itemObject.data;
				console.log("drlist", itemObject.data);
				
				for (var i = 0; i < doctorList.length; i++) {
					let newObj = {};
					newObj.doctor = Object.keys(doctorList[i])[0];
					console.log("test", newObj.doctor);
					newObj.firstname = doctorList[i][newObj.doctor].first_name;
					newObj.lastname = doctorList[i][newObj.doctor].last_name;
					newObj.speciality = doctorList[i][newObj.doctor].speciality;

					doctorTypes.push(newObj);
					console.log("newObj", doctorTypes);
				}
				resolve(doctorTypes);
			})
			.catch((error) => {
				reject(error);
			});
		});	
	};

	let getPatientList = (user) => {
		
		return $q((resolve, reject) => {
			
			$http.get(`${FBCreds.databaseURL}/patients.json`)
			.then((itemObject) => {
				let patientTypes = [];
				let patientList = itemObject.data;
				console.log("patlist", itemObject.data);

				for (var i = 0; i < patientList.length; i++) {
					let newObj = {};
					newObj.patient = Object.keys(patientList[i])[0];
					newObj.firstname = patientList[i][newObj.patient].first_name;
					newObj.lastname = patientList[i][newObj.patient].last_name;
					newObj.ailment = patientList[i][newObj.patient].ailment;
					newObj.doctor=patientList[i][newObj.patient].doctor_id;

					patientTypes.push(newObj);
					console.log("secondobj", patientTypes);
				}
				resolve(patientTypes);
			})
			.catch((error) => {
				reject(error);
			});

		});
	};
	return {getDoctorList, getPatientList};
});

