using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Marathon.Models
{
    public class Weights
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int PlannerId { get; set; }
        public string Date { get; set; }
        public int TargetReps { get; set; }
        public int ActualReps { get; set; }
        public bool Complete { get; set; }
    }
}
