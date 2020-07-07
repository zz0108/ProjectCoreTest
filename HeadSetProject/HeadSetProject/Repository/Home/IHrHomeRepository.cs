using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HeadSetProject.Repository.Home
{
    public interface IHrHomeRepository<T> where T : class
    {
        T GetHomeProducts();
        T GetHomeNsltProducts();
    }
}
