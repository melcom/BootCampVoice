using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(BootcampVoice.Startup))]
namespace BootcampVoice
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
