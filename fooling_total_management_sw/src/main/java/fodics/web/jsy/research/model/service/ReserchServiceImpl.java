package fodics.web.jsy.research.model.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fodics.web.jsy.research.model.dao.ResearchDAO;

@Service
public class ReserchServiceImpl implements ResearchService{

	@Autowired
	private ResearchDAO dao;
}
