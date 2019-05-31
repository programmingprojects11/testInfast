using BLL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Mvc;
using DAL;

namespace WebApplication.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    [System.Web.Http.RoutePrefix("api")]
    public class QuestionsController : ApiController
    {
        // GET: Questions
        public ActionResult Index()
        {
            return null;
            //return View();
        }
        //מחזיר שאלות מהמאגר לפי הקטגוריה שנבחרה
        [System.Web.Http.Route("GetQuestions/{categoryselected}")]
        [System.Web.Http.HttpGet]
        public IHttpActionResult GetQuestions(string categoryselected)
        {
            return Ok(Class1.GetQuestion(categoryselected));
        }
        [System.Web.Http.Route("getQuestions")]
        [System.Web.Http.HttpGet]
        public IHttpActionResult getQuestions()
        {
            return Ok(Class1.getQuestion());
        }
        //מחזיר את האפשריות של השאלה
        [System.Web.Http.Route("GetAnswers/{questionId}")]
        [System.Web.Http.HttpGet]
        public IHttpActionResult GetAnswers(int questionId)
        {
            return Ok(Class1.GetAnswers(questionId));
        }
    }
}