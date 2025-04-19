import React from 'react';
import { Users, MessageSquare, BookOpen, Award, ThumbsUp, MessageCircle, Share2 } from 'lucide-react';

const CommunityHub: React.FC = () => {
  // Dummy data for community posts
  const communityPosts = [
    {
      id: 'p1',
      author: 'Sarah Johnson',
      authorRole: 'Crop Specialist',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      date: '2 hours ago',
      content: "I've been testing a new organic pest control method on my tomato crops with fantastic results. It uses a combination of neem oil, garlic extract, and diatomaceous earth. Has anyone else tried this combination?",
      likes: 24,
      comments: 8,
      tags: ['#OrganicFarming', '#PestControl'],
    },
    {
      id: 'p2',
      author: 'Michael Rivera',
      authorRole: 'Soil Scientist',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      date: '1 day ago',
      content: "Just published a new study on the effects of cover crops on soil health in drought-prone regions. Our data shows a 35% increase in water retention capacity with the right mix of cover crops. DM me if you'd like access to the full paper.",
      likes: 42,
      comments: 15,
      tags: ['#SoilHealth', '#CoverCrops', '#DroughtMitigation'],
    },
    {
      id: 'p3',
      author: 'Emma Thompson',
      authorRole: 'AgriTech Innovator',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      date: '2 days ago',
      content: "Has anyone here integrated IoT soil moisture sensors with their irrigation systems? Looking for recommendations on reliable sensors that work well with solar power in remote field locations.",
      likes: 18,
      comments: 23,
      tags: ['#AgTech', '#IoT', '#SmartIrrigation'],
    },
  ];

  // Dummy data for expert advisors
  const expertAdvisors = [
    {
      id: 'e1',
      name: 'Dr. James Wilson',
      specialty: 'Plant Pathology',
      availability: 'Available',
      image: 'https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 'e2',
      name: 'Dr. Maria Rodriguez',
      specialty: 'Agricultural Economics',
      availability: 'Available',
      image: 'https://images.pexels.com/photos/5793947/pexels-photo-5793947.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 'e3',
      name: 'Prof. David Chen',
      specialty: 'Irrigation Systems',
      availability: 'Busy',
      image: 'https://images.pexels.com/photos/8067753/pexels-photo-8067753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];

  // Dummy data for upcoming events
  const upcomingEvents = [
    {
      id: 'ev1',
      title: 'Sustainable Farming Webinar',
      date: 'June 15, 2023',
      time: '2:00 PM - 3:30 PM EST',
      attending: 156,
    },
    {
      id: 'ev2',
      title: 'AI in Agriculture: Hands-on Workshop',
      date: 'June 22, 2023',
      time: '10:00 AM - 12:00 PM EST',
      attending: 89,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Community Hub</h1>
        <div className="mt-4 md:mt-0 flex flex-wrap gap-2">
          <button className="btn btn-outline py-1.5 flex items-center">
            <BookOpen className="h-4 w-4 mr-1.5" />
            Knowledge Base
          </button>
          <button className="btn btn-primary py-1.5 flex items-center">
            <MessageSquare className="h-4 w-4 mr-1.5" />
            New Discussion
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Community Feed */}
        <div className="lg:col-span-2 space-y-6">
          {/* Create Post */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-4">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center">
                    <Users className="h-5 w-5 text-primary-600" />
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="border border-gray-300 rounded-lg px-3 py-2 flex items-center text-gray-500 hover:bg-gray-50 cursor-pointer">
                    <span>Share something with the community...</span>
                  </div>
                </div>
              </div>
              <div className="mt-3 flex justify-between">
                <button className="btn btn-outline py-1 px-3 text-sm">
                  📷 Photo
                </button>
                <button className="btn btn-outline py-1 px-3 text-sm">
                  📊 Poll
                </button>
                <button className="btn btn-outline py-1 px-3 text-sm">
                  📁 Document
                </button>
                <button className="btn btn-outline py-1 px-3 text-sm">
                  🔗 Link
                </button>
              </div>
            </div>
          </div>

          {/* Community Posts */}
          {communityPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-4">
                <div className="flex space-x-3">
                  <div className="flex-shrink-0">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={post.avatar}
                      alt={post.author}
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-gray-900">
                      {post.author} <span className="text-xs text-gray-500 font-normal">• {post.authorRole}</span>
                    </p>
                    <p className="text-sm text-gray-500">
                      {post.date}
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-gray-600">{post.content}</p>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {post.tags.map((tag, idx) => (
                      <span key={idx} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex space-x-4">
                    <button className="flex items-center text-sm text-gray-500 hover:text-primary-600">
                      <ThumbsUp className="h-4 w-4 mr-1" />
                      {post.likes}
                    </button>
                    <button className="flex items-center text-sm text-gray-500 hover:text-primary-600">
                      <MessageCircle className="h-4 w-4 mr-1" />
                      {post.comments}
                    </button>
                  </div>
                  <button className="flex items-center text-sm text-gray-500 hover:text-primary-600">
                    <Share2 className="h-4 w-4 mr-1" />
                    Share
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="text-center">
            <button className="btn btn-outline py-1.5">
              Load More Posts
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Expert Connect */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-4 border-b">
              <h2 className="font-semibold flex items-center">
                <Award className="h-5 w-5 mr-2 text-secondary-500" />
                Connect with Experts
              </h2>
            </div>
            <div className="p-4">
              <div className="space-y-4">
                {expertAdvisors.map((expert) => (
                  <div key={expert.id} className="flex items-center space-x-3">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={expert.image}
                      alt={expert.name}
                    />
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-gray-900">{expert.name}</p>
                      <p className="text-xs text-gray-500">{expert.specialty}</p>
                    </div>
                    <div className="flex-shrink-0">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        expert.availability === 'Available' 
                          ? 'bg-success-100 text-success-800' 
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {expert.availability}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <button className="btn btn-secondary w-full py-1.5">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-4 border-b">
              <h2 className="font-semibold">Upcoming Events</h2>
            </div>
            <div className="p-4">
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="border rounded-lg p-3 hover:shadow-sm transition-shadow">
                    <h3 className="font-medium text-gray-900">{event.title}</h3>
                    <p className="text-xs text-gray-600 mt-1">{event.date}</p>
                    <p className="text-xs text-gray-600">{event.time}</p>
                    <div className="mt-2 flex justify-between items-center">
                      <span className="text-xs text-gray-500">{event.attending} attending</span>
                      <button className="text-xs text-primary-600 font-medium hover:text-primary-800">
                        RSVP
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <button className="btn btn-outline w-full py-1.5">
                  View All Events
                </button>
              </div>
            </div>
          </div>

          {/* Popular Topics */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-4 border-b">
              <h2 className="font-semibold">Popular Topics</h2>
            </div>
            <div className="p-4">
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
                  #DroughtResistant
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-secondary-100 text-secondary-800">
                  #SoilHealth
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-earth-100 text-earth-800">
                  #OrganicFarming
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-success-100 text-success-800">
                  #CropRotation
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-warning-100 text-warning-800">
                  #ClimateAdaptation
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
                  #PrecisionAg
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-secondary-100 text-secondary-800">
                  #SmartIrrigation
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-earth-100 text-earth-800">
                  #SustainableAg
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityHub;