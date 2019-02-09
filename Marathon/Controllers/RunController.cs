using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Marathon.DataAccess;
using Marathon.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace Marathon.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RunController : ControllerBase
    {
        private readonly RunStorage _storage;

        public RunController(IConfiguration config)
        {
            _storage = new RunStorage(config);
        }

        // GET ALL RUNS
        [HttpGet]
        public IActionResult GetAllRuns()
        {
            return Ok(_storage.GetAllRunTasks());
        }
        [HttpPost]
        public void AddRunTask([FromBody] Run run)
        {
            _storage.AddARun(run);
        }
        [HttpDelete("{id}")]
        public void DeleteRunTask(int id)
        {

            _storage.DeleteRun(id);
        }
        [HttpPut("{id}")]
        public void UpdateRun([FromBody] Run run, int id)
        {
            run.Id = id;
            _storage.UpdateRunTask(run);
        }
    }
}