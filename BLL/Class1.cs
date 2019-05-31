using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL
{
    public static class Class1
    {
       
        
        public static bool Enter(Teacher t)
        {

         //  DAL.Teacher d = Entity.db.Teachers.ToList().FirstOrDefault(t => t.teacherPassword == password);
            if (Entity.db.Teachers.Where(p => p.teacherName == t.teacherName && p.teacherPassword == t.teacherPassword).ToList().Count() > 0)
                return true;
            return false;
        }

        public static List<Category> GetCategories()
        {

            return Entity.db.Categories.ToList();

        }

        public static object GetAnswers(int questionId)
        {
            throw new NotImplementedException();
        }

        public static object GetQuestion(string categoryselected)
        {
            throw new NotImplementedException();
        }

        public static object getQuestion()
        {
            List<Question> lq = null;
            lq = Entity.db.Questions.ToList();
            if (lq != null)
                return lq;
            return null;
        }
    }
}
