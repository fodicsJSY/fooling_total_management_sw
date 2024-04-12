package fodics.web.jsy.dataSearch.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

@org.springframework.web.bind.annotation.RestController
public class RestController {
	
	// 
		@PostMapping("/totalUrl")
		@ResponseBody
		public String dataForword(
				@RequestBody String req
				) {
			System.out.println("req"+req);
			return req;
		}

}
