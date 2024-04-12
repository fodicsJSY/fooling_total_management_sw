package fodics.web.jsy.equipmentControl.model.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fodics.web.jsy.equipmentControl.model.dao.EquipmentControlDAO;

@Service
public class EquipmentControlServiceImpl implements EquipmentControlService{

	@Autowired
	private EquipmentControlDAO dao;
}
