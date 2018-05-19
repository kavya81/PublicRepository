namespace api_projecttracking.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class _new : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Managercomments",
                c => new
                    {
                        McId = c.Int(nullable: false, identity: true),
                        comment = c.String(),
                        protaskId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.McId)
                .ForeignKey("dbo.Tasks", t => t.protaskId, cascadeDelete: true)
                .Index(t => t.protaskId);
            
            
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Managercomments", "protaskId", "dbo.Tasks");
           
           
            DropIndex("dbo.Managercomments", new[] { "protaskId" });
           
            DropTable("dbo.Managercomments");
        }
    }
}
