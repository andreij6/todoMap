using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Maps.Web.Startup))]
namespace Maps.Web
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
