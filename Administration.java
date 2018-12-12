/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Controllers;

import AppData.DataContext;
import Models.Watch;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

/**
 *
 * @author 6141456
 */
@Controller
public class Administration {
        
    @RequestMapping(value="/Administration/Accueil", method = RequestMethod.GET)
    public ModelAndView index(){
        return new ModelAndView("Admin_Accueil","modelWatch",new Watch());
    }
    
    @RequestMapping(value = "/Aministration/Ajouter", method = RequestMethod.POST)
    @ResponseBody
    protected String add(@RequestBody String montreJson) {
         DataContext  dt = new DataContext();
         Gson gson = new GsonBuilder().create();
         Watch w = gson.fromJson(montreJson,Watch.class);
        dt.insert(w);
        return "Élément ajouté avec succès !";
    }
    
}
