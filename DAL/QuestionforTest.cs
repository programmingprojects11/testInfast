//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace DAL
{
    using System;
    using System.Collections.Generic;
    
    public partial class QuestionforTest
    {
        public int testid { get; set; }
        public int questionId { get; set; }
        public int nikod { get; set; }
        public int id { get; set; }
    
        public virtual Question Question { get; set; }
    }
}
