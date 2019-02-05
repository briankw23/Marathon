using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Marathon.Models
{
    public class Run
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int PlannerId { get; set; }
        public string Date { get; set; }
        public int TargetMiles { get; set; }
        public int ActualMiles { get; set; }
        public bool Complete { get; set; }
    }
}
